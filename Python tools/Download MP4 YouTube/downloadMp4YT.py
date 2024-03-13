from pytube import YouTube
import os

def baixar_video(url, download):
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        print("Baixando", yt.title, "...")
        stream.download(output_path=download)
        print("Download Completo!")
    except Exception as e:
        print("Ocorreu um erro", str(e))

url_video = "url"

local_download = os.path.expanduser("~/Desktop/")
baixar_video(url_video, local_download)