from PIL import Image

# Load image #
image_file = Image.open(r"SRC IMAGE")

# Convert image to Black and White # 
image_file = image_file.convert('L')

# Save image # 
image_file.save(r"SRC IMAGE")