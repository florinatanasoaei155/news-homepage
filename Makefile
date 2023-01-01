build:
	docker build -t news-homepage .
run:
	docker run --name news-homepage -p 3000:3000 news-homepage
