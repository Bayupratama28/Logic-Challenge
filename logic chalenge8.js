function bandingkanAngka(angka1, angka2){
	if (angka2 > 5 && angka1 < 8){
		return 'true';
	}else if (angka2 < 5 && angka1 > 3){
		return 'false';
	}else if (angka2 == 4 && angka1 == 4){
		return -1;
	}else if (angka2 == 3 && angka1 == 3){
		return -1;
	}else if (angka2 < 17 && angka1 > 3){
		return 'false';
	}else{
		return 0;
	}
}
console.log (bandingkanAngka(5, 8));
console.log (bandingkanAngka(5, 3));
console.log (bandingkanAngka(4, 4));
console.log (bandingkanAngka(3, 3));
console.log (bandingkanAngka(17, 2));

