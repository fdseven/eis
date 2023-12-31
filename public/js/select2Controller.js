$(".select-opt").select2({
    tags: true,
    language: {
        noResults:function() {
            return"Data tidak ditemukan";
        }
    }
});