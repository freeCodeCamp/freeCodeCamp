import models.vgg16 as vgg16
import numpy as np
import tensorflow as tf
import argparse
import misc.utils as utils
import models.vgg_utils as vgg_utils
import os
def run(image_filename, class_label, output_filename):
	grad_CAM_map= utils.grad_CAM_plus(image_filename, class_label, output_filename)

def main():
	parser = argparse.ArgumentParser()
	parser.add_argument('-l', '--class_label', default=-1, type=int, help='if -1 (default) choose predicted class, else user supplied int')
	parser.add_argument('-gpu', '--gpu_device', default="0", type=str, help='if 0 (default) choose gpu 0, else user supplied int')
	parser.add_argument('-f', '--file_name', type=str, help="Specify image path for Grad-CAM++ visualization")
	parser.add_argument('-o', '--output_filename', default="output.jpeg", type=str, help="Specify output file name for Grad-CAM++ visualization, default name 'output.jpeg'")
	args = parser.parse_args()
	gpu_id = args.gpu_device
	print gpu_id
	os.environ["CUDA_VISIBLE_DEVICES"]=gpu_id
	run(args.file_name, args.class_label, args.output_filename)

if __name__ == '__main__':
    main()
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
