build:
	docker build -t news-homepage .
run:
	docker run --rm -it --name news-homepage -p 3000:3000 -v ${PWD}:/app news-homepage
