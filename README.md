# McHacks2022
 

Project for McHacks 2022 by team Cozy Koalas!

### To run backend ML object detection:
```
# go to folder
cd yolov5

# install needed requirements
pip install -r requirements.txt

# choose weights as weights/best.pt for 2 labels
# source 0 is webcam feed. Can change to other numbers for different feeds, as documented in detect.py
python detect.py -- source 0 --weights weights/best_3_labels.pt 
```