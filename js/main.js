	let btnStart = document.querySelector("#button_strat")
	let btn = document.querySelector(".button")
	let gameSelectValue = document.querySelector("#play_select")
	let status = document.querySelector(".status")
	let buttondiv = document.querySelector(".buttondiv")
	let startAgain = document.querySelector("#startAgain")
	let h1 = document.querySelector("#h1")
	

	function youWon(){
		if(matrix[y][x] == matrix[homeArr[0]][homeArr[1]]){
			buttondiv.style.display = "none"
			status.style.display = "block"
			h1.innerHTML = "YOU WON"

		}
			for(i = 0; i<= wolfArray.length -1 ; i++){
				if(matrix[wolfArray[i][0]][wolfArray[i][1]] == matrix[y][x]){
					buttondiv.style.display = "none"
					status.style.display = "block"
			}

		}		
	}

	function createDiv(){
		arrValueDiv = getValue()
		btn.innerHTML = " "
		matrix = []
		nomber = 0
		for (i = 0; i <= arrValueDiv[3] ; i++){
			matrix[i] = []
			for (j = 0; j <= arrValueDiv[3]; j++){
				matrix[i][j] = document.createElement("div")
				matrix[i][j].id = `cell${nomber}`
				btn.appendChild(matrix[i][j])
				nomber += 1
			}
		}
		return matrix
	}

	function getValue(){
		let selValue = document.querySelector("#play_select").value
		if(selValue == 24){arrayValue = [6,2,1,4,5]}
		if(selValue == 48){arrayValue = [9,4,2,6,7]}
		if(selValue == 99){arrayValue = [11,5,3,9,10]}
		return arrayValue
	}

	function buttonStyle(){

		switch(getSelectValue()){
			case "24":
				btn.style.width = 315 + "px"
				break
			case "48":
				btn.style.width = 435 + "px"
				break
			case "99":
				btn.style.width = 620 + "px"
				break
		}
	}

	function getSelectValue() {
		let selValue = document.querySelector("#play_select").value
		return selValue		
	} 

	function randomNomber(){
		arr = getValue()
		array = []

		x = []
		for(i=0;i<=getSelectValue();i++){
				  array.push(i)
			}
		for(countCycles = 0;countCycles <= arr[0];countCycles++){
				   	x[countCycles] = array.splice(Math.random()*array.length,1)[0]
			}
		x[x.length] = arr[1]
		x[x.length] = arr[2]
		return x
	}

	function randomPositionRabbit(){
		array = randomNomber()
		photoRabbit = document.createElement("img")
		photoRabbit.src = "img/rabbit.png"
		photoRabbit.id = "imgRabbit"
		serchDivRabbit = document.querySelector(`#cell${array[0]}`)
		serchDivRabbit.appendChild(photoRabbit)
	}
	function randomPositionHome(){
		photoHome = document.createElement("img")
		photoHome.src = "img/home.png"
		serchDivHome = document.querySelector(`#cell${array[1]}`)
		serchDivHome.appendChild(photoHome)
	}

	function randomPositionWolf(){
		for (i = 0; i <= array[array.length-2]; i++){
			photoWolf = document.createElement("img")
			photoWolf.src = "img/gamewolf.png"
			photoWolf.id = "imgwolf"+[i]
			serchDivWolf = document.querySelector(`#cell${array[2 + i]}`)
			serchDivWolf.appendChild(photoWolf)
		}
	}
	function randomPositionBan(){
		for (j = 0; j <= array[array.length-1]; j++){
			photoBan = document.createElement("img")
			photoBan.src = "img/ban.png"
			serchDivBan = document.querySelector(`#cell${array[3+array[array.length-2] + j]}`)
			serchDivBan.appendChild(photoBan)
		}
	}
	function cellRabbit(){
		arr = getValue()
		cellArr = []
		cellArr[0] = Math.floor(array[0] / arr[arr.length-1])
		for (i = 0; i<=array[0]; i += arr[arr.length-1]){
			cellArr[1] = i
		}
		cellArr[1] = array[0] - cellArr[1]
		return cellArr
}

	function cellHome(){
		arr = getValue()
		homeArr = []
		homeArr[0] = Math.floor(array[1] / arr[arr.length-1])
		for (i = 0; i<=array[1]; i += arr[arr.length-1]){
			homeArr[1] = i
		}
		homeArr[1] = array[1] - homeArr[1]
		return homeArr
}

	function cellWolf(){
		arr = getValue()
		wolfArray = []
		for (i = 0; i<= array[array.length-2]; i++){
			wolfArray[i] = []
			for (j = 0; j<=0;j++){
				wolfArray[i][j] = Math.floor(array[2 + i] / arr[arr.length-1])
				for (wolfN = 0; wolfN<=array[2 + i]; wolfN += arr[arr.length-1]){
					wolfArray[i][1] = wolfN
				}
				wolfArray[i][1] = array[2 + i]-wolfArray[i][1]
		}
	}
	return wolfArray	
}

	function cellBan(){
		arr = getValue()
		banArray = []
		for (i = 0; i<= array[array.length-1]; i++){
			banArray[i] = []
			for (j = 0; j<=0;j++){
				banArray[i][j] = Math.floor(array[3+array[array.length-2] + i] / arr[arr.length-1])
				for (banN = 0; banN<=array[3+array[array.length-2] + i]; banN += arr[arr.length-1]){
					banArray[i][1] = banN
				}
				banArray[i][1] = array[3+array[array.length-2] + i]-banArray[i][1]
		}
	}
	return banArray	
}

	function moveUP(){
		if(event.code == "ArrowUp"){
			if(y < 1){
				matrix[arr[arr.length-2]][x].appendChild(imgRabbit)
				y = arr[arr.length-2]+1}
			y = y - 1
			matrix[y][x].appendChild(imgRabbit)
		}
	}
	function moveDown(){
		if(event.code == "ArrowDown"){
			if(y > arr[arr.length-2] -1){
				matrix[0][x].appendChild(imgRabbit)
				y = 0 - 1}
			y = y + 1
			matrix[y][x].appendChild(imgRabbit)
		}
	}
	function moveLeft(){
		if(event.code == "ArrowLeft"){
			if(x < 1){
				matrix[y][arr[arr.length-2]].appendChild(imgRabbit)
				x = arr[arr.length-2]+1}
			x = x - 1
			matrix[y][x].appendChild(imgRabbit)
		}	
	}
	function moveRight(){
		if(event.code == "ArrowRight"){
			if(x > arr[arr.length-2] - 1){
				matrix[y][0].appendChild(imgRabbit)
				x = 0 - 1}
			x = x + 1
			matrix[y][x].appendChild(imgRabbit)
		}
	}

	function banRabbit(){
		for (i = 0; i<=banArray.length - 1; i++){
			if (matrix[y][x] == matrix[banArray[i][0]][banArray[i][1]]){
				y = cbanY
				x = cbanX
				matrix[y][x].appendChild(imgRabbit)
			}

		}
}

	function wban(){
		for(i = 0; i<= wolfArray.length - 1 ; i++){
			moveWolf()
			serchwolfBan = document.querySelector(`#imgwolf${i}`)
			for(w = 0; w <= wolfArray.length -1; w++){
				if (i != w) {
					if( matrix[wolfArray[i][0]][wolfArray[i][1]] == matrix[wolfArray[w][0]][wolfArray[w][1]] ){
						wolfArray[i][0] = wolfBanXY[i][0]
						wolfArray[i][1] = wolfBanXY[i][1]
						matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolfBan)
					}
				}		
			}
			if (matrix[wolfArray[i][0]][wolfArray[i][1]] == matrix[homeArr[0]][homeArr[1]]){
				wolfArray[i][0] = wolfBanXY[i][0]
				wolfArray[i][1] = wolfBanXY[i][1]
				matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolfBan)
			}
			for (banWolf = 0; banWolf<=banArray.length - 1; banWolf++){
				if (matrix[wolfArray[i][0]][wolfArray[i][1]] == matrix[banArray[banWolf][0]][banArray[banWolf][1]]){
					wolfArray[i][0] = wolfBanXY[i][0]
					wolfArray[i][1] = wolfBanXY[i][1]
					matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolfBan)			
				}
			}
		}
	}

	

	function moveWolf(){
		arr = getValue()
		rand = Math.floor(Math.random()*2)
		serchwolf = document.querySelector(`#imgwolf${i}`)

			if (y == wolfArray[i][0]) {
				rand == 1
			}

			if (x == wolfArray[i][1]) {
				rand == 0
			}
			if (rand == 0) {
				if(x > wolfArray[i][1]){
						wolfArray[i][1] = wolfArray[i][1] + 1
						matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolf)

			}

				if(x < wolfArray[i][1]){
						wolfArray[i][1] = wolfArray[i][1] - 1
						matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolf)

				}
			}
			else{
				if(y > wolfArray[i][0]){
						wolfArray[i][0] = wolfArray[i][0] + 1
						matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolf)

				}

				if(y < wolfArray[i][0]){
						wolfArray[i][0] = wolfArray[i][0] - 1
						matrix[wolfArray[i][0]][wolfArray[i][1]].appendChild(serchwolf)
				 }
			}

}


	function wolfBan(){
		wolfBanXY = []
		for(i = 0; i<= wolfArray.length -1 ; i++){
			wolfBanXY[i] = []
			for (j= 0; j<=1; j++){
				wolfBanXY[i][j] = wolfArray[i][j]
				wolfBanXY[i][j] = wolfArray[i][j]
			}
		}
		return wolfBanXY
	}

	function equalWolf(){
		equalWolfArr  = []
		for(i = 0; i<= wolfArray.length - 1 ; i++){
			for(w = 0; w <= wolfArray.length -1; w++){
				if (i != w) {
					if( matrix[wolfArray[i][0]][wolfArray[i][1]] == matrix[wolfArray[w][0]][wolfArray[w][1]] ){
						equalWolfArr[0] = wolfBanXY[i][0]
						equalWolfArr[1] = wolfBanXY[i][1]
						return	equalWolfArr
				}
			}		
		}
	}
}
	function start(){
		getValue()
		createDiv()
		buttonStyle()
		randomPositionRabbit()
		randomPositionHome()
		randomPositionWolf()
		randomPositionBan()
		y = cellRabbit()[0]
		x = cellRabbit()[1]
		wolf = cellWolf()
		cellBan()
		cellHome()
	}
	btnStart.addEventListener("click", function(){
		start()
	})

	document.addEventListener("keyup", function(event) {

		wolfBan()
		cbanY = y
		cbanX = x
		moveUP()
		moveDown()
		moveLeft()
		moveRight()
		wban()
		banRabbit()
		youWon()
	})

	startAgain.addEventListener("click", function(){
		buttondiv.style.display = "flex"
		status.style.display = "none"
		h1.innerHTML = "Game Over"
		start()
})
