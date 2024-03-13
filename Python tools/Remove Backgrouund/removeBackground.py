from rembg import remove
from PIL import Image

# Load Image
image_file = Image.open(r"SRC IMAGE")

# Remove Background 
image_file = remove(image_file)

# Save Image
image_file.save(r"SRC IMAGE")