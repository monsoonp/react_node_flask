from flask import Flask, json, request, jsonify
from datetime import datetime
import re, json as js

app = Flask(__name__)

"""
@app.route("/", methods=['GET'])
def get_request():
    return json.dumps({"hello":"there"})

@app.route("/hello/<name>")
def hello_there(name):
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")

    # Filter the name argument to letters only using regular expressions. URL arguments
    # can contain arbitrary text, so we restrict to safe characters only.
    match_object = re.match("[a-zA-Z]+", name)

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend"

    content = "Hello there, " + clean_name + "! It's " + formatted_now
    return content

"""

@app.route("/flask")
def get_flask():
    data = "some data is here"
    return data

members = [
    {"index":0, "dpt":"flask", "name": "플라스크", "pwd":"hello python"}
]
@app.route("/flask/get")
def get_list():
    return jsonify(members)

@app.route("/flask/reset")
def reset_list():
    members.clear()
    return jsonify(members)

@app.route("/flask/add", methods=["post"])
def add_list():
    data =request.json
    print("added:",data)
    members.append(data)
    return jsonify(members)

@app.route("/flask/del/<int:index>")
def del_list(index):
    for i,m in enumerate(members):
        if m["index"] == index:
            print("removed:",members[i])
            del members[i]
    
    return jsonify(members)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)