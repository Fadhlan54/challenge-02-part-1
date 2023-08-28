function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // mendeklarasikan variabel tukar dengan nilai true agar bisa masuk ke looping
  let tukar = true;

  // melakukan looping untuk mengurutkan data
  while (tukar) {

    // mengubah nilai tukar menjadi false agar keluar 
    // dari looping jika tidak ada variabel yang ditukar
    tukar = false;

    // looping data dari awal sampai index sebelum terakhir
    for (let i = 0; i < result.length - 1; i++) {
      /* 
      membandingkan nilai dari arrray index sekarang dan selanjutnya
      apabila nilai dari array index sekarang  lebih kecil dari selanjutnya
      maka nilai ditukar 
    */
      if (result[i].year < result[i + 1].year) {

        // membuat variabel tampungan sementara 
        // untuk menukar nilai dari index array
        let temp = result[i];

        // menukar data array
        result[i] = result[i + 1];
        result[i + 1] = temp;

        // mengubah nilai tukar menjadi true agar tidak keluar dari perulangan while
        // karena ada variabel ditukar
        tukar = true;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
