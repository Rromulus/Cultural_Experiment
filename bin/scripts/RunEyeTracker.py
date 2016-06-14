# 
# author: Stefan Schlobach
#
# version 1 (13-6-16)

# native
import os
import time
import sys

# external
#import pygame

# custom
from pytribe import EyeTribe

# # # # #
# CONSTANTS

# screen stuff
RESOLUTION = (2560,1440)
BGC = (0,0,0)

# Get the testperson ID and the system time. 
timeStamp = time.strftime("%H%M%S")
testperson = sys.argv[1];
print timeStamp
print testperson 

# files and paths
DIR = os.path.dirname(os.path.abspath(__file__))
LOGFILE = os.path.join(DIR, 'logs/'+testperson+'_'+timeStamp)

# # # # #
# PREPARE
# start communications with the EyeTribe tracker
tracker = EyeTribe(logfilename=LOGFILE)

        
# start recording gaze data
tracker.start_recording()
tracker.log_message("Recording of Test Person " + testperson + " starts")
tracker.log_message('ID'+timeStamp)

time.sleep(183)

# stop recording
##raw_input("Press Enter when experiment is finished...")
##
tracker.log_message("Recording of Test Person " + testperson + " Finished")
tracker.stop_recording()


#print "Do not forget to recalibrate for the next user"
# # # # #
# CLOSE

# close connection to the tracker
tracker.close()

