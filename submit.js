 $('#submitCard_'+card_id_pop).on('submit', function (e) {
            e.preventDefault();
            var task_id = $('input[name*="task_id"]').val();
            var folder_name = $('input[name*="folder_name"]').val();

            var fd = new FormData();
            fd.append('file', $("#js-file_"+card_id_pop)[0].files[0]);
            fd.append('task_id',task_id);
            fd.append('folder_name',folder_name);

            $.ajax({
                  type: 'POST',
                  url: '/ajaxs/addFilesCard',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data:fd,
                  dataType : 'json',
                  success: function () {
                        alert('form was submitted');
                  }
            });
      });
