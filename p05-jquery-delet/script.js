$(document).ready(function () {
  $('.css').click(function () {
    let isi = $(this).text();
    let tid = $(this).prop('id');
    let rid = tid.split('_');
    let id_kolom = rid[1];
    let kawan_ = $('#kolom_' + id_kolom).text();

    if (isi == ' Delete') {
      let yakin = confirm('Yakin mau menghapus data atas nama ${kawan_ } ??');
      if (!yakin) return;

      $('#kolom_' + id_kolom).fadeOut();
    } else {
      alert('aksi lain untuk css ini belum ada. Terima Kasih sudah mencoba.');
    }
  });
});
