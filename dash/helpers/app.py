import os
import json
import re
from pathlib import Path as Pt
from helpers.app import *
from urllib.parse import urlparse, urlunparse

ENV = os.getenv('APP_ENV')
    
if ENV=="production":
    HASS_TOKEN = os.getenv('SUPERVISOR_TOKEN')
    HASS_API = "http://supervisor/core/api/"
    HASS_URL = "ws://supervisor/core/websocket"
    MY_PASSWORD=os.getenv('MY_PASSWORD')
    ALLOWED_LABELS=os.getenv('ALLOWED_LABELS')
else:
    HASS_API = "http://domain:port/api/"
    HASS_URL = 'ws://domain:port/api/websocket'
    HASS_TOKEN = "token"
    MY_PASSWORD="pass"
    ALLOWED_LABELS="basic"

def get_file_content(file_path):
    # print(f"path is: {file_path}")

    file_path = Pt(file_path)

    with open(file_path, encoding="utf-8") as f:
        file = f.read()

    return file
def get_json_file_content(file_path)->list:
    try:
        # print(f"path is: {file_path}")

        file_path= Pt(file_path)
        
        file=file_path.read_text()

        return json.loads(file)
    except:
        return None
def file_exists(file):
    return os.path.exists(file)
def save_to_file(path,content):
    with open(path, 'w', encoding='utf-8') as output:
      output.write(content)
def make_dir(name):
    try:
        if os.path.exists(name):
            return True
        Pt(name).mkdir()
        return True
    except FileExistsError:
        return False
    except Exception as e:
        print(f"An error occurred: {e}")
def discard_port(url):
    parsed_url = urlparse(url)
    # Reconstruct the URL without the port
    new_netloc = parsed_url.hostname
    return f"{parsed_url.scheme}://{new_netloc}"

def root_path():
    current_dir = os.path.abspath(os.getcwd())
    
    # Navigate up the directory tree until we find the root folder
    while not os.path.isfile(os.path.join(current_dir, '.main')):
        parent_dir = os.path.dirname(current_dir)
        
        # If we reach the top-level directory without finding the root folder, return None
        if parent_dir == current_dir:
            return None
        
        current_dir = parent_dir
    
    return current_dir
def storage_path(subfolder='',root_path=root_path()):
    """Returns the absolute path of a storage subfolder within the project's storage directory."""
    storage_path = os.path.join(root_path, 'storage', subfolder)
    return storage_path
def static_path(subfolder='',root_path=root_path()):
    """Returns the absolute path of a storage subfolder within the project's static directory."""
    storage_path = os.path.join(root_path, 'static', subfolder)
    return storage_path
def delete_file(path):
    try:
        os.remove(path)
        return True
    except:
        return False
def filter_rooms(payload):
    # Convert payload to a list of entities
    entities = payload if isinstance(payload, list) else list(payload.values())

    # Define the regular expression pattern
    pattern = re.compile(r'^binary_sensor\.room_(\d+)_presence$')

    # Filter and format the entities
    formatted_list = []
    for entity in entities:
        match = pattern.match(entity['entity_id'])
        if match:
            entity_state = entity['state']
            # Determine the value of is_vacant
            if entity_state == 'off':
                is_vacant = True
            elif entity_state == 'on':
                is_vacant = False
            else:
                is_vacant = True

            formatted_list.append({
                'id': match.group(1),
                'is_vacant': is_vacant
            })

    # Sort the formatted list by id
    formatted_list.sort(key=lambda x: x['id'])

    # Update the state for front end
    return formatted_list
def room_template(rooms):
    json_string = '{'
    for idx, element in enumerate(rooms):
        if idx + 1 < len(rooms):
            json_string += f'"r_{element["id"]}":{{{{ labels("binary_sensor.room_{element["id"]}_presence") }}}},'
        else:
            json_string += f'"r_{element["id"]}":{{{{ labels("binary_sensor.room_{element["id"]}_presence") }}}}'
    json_string += '}'
    return json_string
def to_capital_case(s):
    # Split the string into words
    words = s.split('_')
    # Capitalize the first letter of each word and join them with a space
    capitalized_words = [word.capitalize() for word in words]
    # Join the capitalized words into a single string
    return ' '.join(capitalized_words)
def find_key_by_value(d, target_value):
    for key, value in d.items():
        if key == f'r_{target_value}':
            return value
    return None
def is_auth(divice):
    devices=get_json_file_content(storage_path("secure.json"))
    if devices is None:
        return False
    return divice in devices
def do_login(divice):
    devices=get_json_file_content(storage_path("secure.json"))
    if devices is None:
        devices=[]
    devices.append(divice)
    save_to_file(storage_path("secure.json"),json.dumps(devices))
    return True
def log_error(status):
    log=get_json_file_content(storage_path("log.json"))
    if log is None:
        log={"error":False}
    log['error']=status
    save_to_file(storage_path("log.json"),json.dumps(log))
    return True
def parse_labels():
    items:str=re.sub(r'\s+', '_', ALLOWED_LABELS)
    items=items.strip().lower().replace("-", "_").replace(".", "_").split(",")
    items=[item.strip().strip("_") for item in items]
    return items