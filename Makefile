start:
	docker build -t news-homepage-image . && \
	docker run --rm -itd --name news-homepage -p 3000:3000 -v ${PWD}:/app news-homepage-image

clean:
	docker rm -f -v news-homepage && docker rmi news-homepage-image