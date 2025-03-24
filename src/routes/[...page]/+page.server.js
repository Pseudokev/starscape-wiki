import fs from "fs"

export function load({params}){

    

    return {
        title :params.page
    }
}

export function entries() {
	return [
		{ page: "enemies/drone-battleship" },
	];
}