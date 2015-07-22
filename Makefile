
all: release

run:
	nw
release:
	mkdir -p build
	zip -r build/package.nw package.json src/ 

