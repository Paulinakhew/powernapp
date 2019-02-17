from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)


@app.route('/',methods=['GET','POST'])
def website():
    if request.method=="GET":
        return render_template('index.html')
    else:
        return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)