from flask import Flask, request, render_template
import pickle
import sklearn

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    model = pickle.load(open("league_game_prediction_model.pkl", "rb"))
    data = request.form.to_dict()
    for key, value in data.items():
        data[key] = int(value)
    # [firstBlood, firstTower, firstInhibitor, firstBaron, firstDragon, firstRiftHerald, t1_towerKills, 
    # t1_inhibitorKills, t1_baronKills, t1_dragonKills, t2_towerKills, t2_inhibitorKills, t2_baronKills, t2_dragonKills]
    prediction = model.predict_proba([[data["first_blood"], data["first_tower"], data["first_inhibitor"], data["first_baron"], data["first_dragon"], data["first_rift_herald"],
                    data["blue_team_tower_kills"], data["blue_team_inhibitor_kills"], data["blue_team_baron_kills"], data["blue_team_dragon_kills"],
                    data["red_team_tower_kills"], data["red_team_inhibitor_kills"], data["red_team_baron_kills"], data["red_team_dragon_kills"]]])

    prediction_text = f"probability of Blue team winning: {prediction[0][0]*100:.2f}% \nprobability of Red team winning: {prediction[0][1]*100:.2f}%"
    
    return render_template("prediction.html", prediction_text=prediction_text)

if __name__ == '__main__':
   app.run()
