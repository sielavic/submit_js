 $('#submitCard_'+card_id_pop).on('submit', function (e) {
            e.preventDefault();
            var targetIdPop = $(this).attr('id');
            var cardIdPop = targetIdPop.replace(/[^0-9]/g,"");
            var task_id_card = $('#card_id_'+cardIdPop).val();
            var folder_name = $('#folder_name_card_'+cardIdPop).val();

            var fd = new FormData();
            fd.append('file', $("#js-file_"+cardIdPop)[0].files[0]);
            fd.append('task_id',task_id_card);
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
