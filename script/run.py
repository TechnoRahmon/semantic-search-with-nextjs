import os
import sys
from semantic_router.layer import RouteLayer
from semantic_router.encoders import OpenAIEncoder
from semantic_router import Route

indexes = ['chitchat', 'politics']

def run():
    try:
        # or for OpenAI
        os.environ["OPENAI_API_KEY"] = sys.argv[1]
        encoder = OpenAIEncoder()
        routes = get_routes()
        rl = RouteLayer(encoder=encoder, routes=routes)
        result = rl(sys.argv[2]).name
        print(f"result:{result if result != None else 'default'}")
    except Exception  as err:
        raise err


def getIndexFile(file_name: str):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # Open the PDF file in read-binary mode
    with open(f'{current_dir}/indexes/{file_name}.txt', 'rb') as index_file:
        return [line for line in index_file.read().splitlines() if len(line)>0]

def init_routes(index):
    return Route(
    name=index,
    utterances=getIndexFile(index),
    )

def get_routes():
    try:
        return [init_routes(index) for index in indexes]
    except Exception  as err:
        raise err

run()
sys.stdout.flush()