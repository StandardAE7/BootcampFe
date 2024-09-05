$(document).ready(function() {
    // Show modal and pre-fill form with Note and Day
    $('#updateTodoBtn').on('click', function() {
        const note = $('#taskNote').text();
        const day = $('#taskDay').text();

        // Pre-fill the modal form
        $('#updateNote').val(note);
        $('#updateDay').val(day);

        // Disable Save Changes initially
        $('#saveChangesBtn').attr('disabled', true);

        // Show the modal and prevent closing with Esc or click outside
        $('#updateTodoModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });

    // Enable Save Changes button only when both fields are filled
    $('#updateNote, #updateDay').on('input', function() {
        const noteVal = $('#updateNote').val();
        const dayVal = $('#updateDay').val();

        if (noteVal && dayVal) {
            $('#saveChangesBtn').attr('disabled', false);
        } else {
            $('#saveChangesBtn').attr('disabled', true);
        }
    });

    // Handle form submission
    $('#updateTodoForm').on('submit', function(e) {
        e.preventDefault();
        
        const updatedNote = $('#updateNote').val();
        const updatedDay = $('#updateDay').val();

        // Update Task Overview with new data
        $('#taskNote').text(updatedNote);
        $('#taskDay').text(updatedDay);

        // Close modal
        $('#updateTodoModal').modal('hide');
    });

    $('#activity, #category, #detailNote').on('input change', function() {
        const activityVal = $('#activity').val().trim();
        const categoryVal = $('#category').val().trim();
        const detailNoteVal = $('#detailNote').val().trim();

        // Enable Add Task button only if all fields are filled
        if (activityVal !== '' && categoryVal !== '' && detailNoteVal !== '') {
            $('#addTaskBtn').prop('disabled', false);
        } else {
            $('#addTaskBtn').prop('disabled', true);
        }
    });

    // Handle Add Task form submission
    $('#addTodoDetailForm').on('submit', function(e) {
        e.preventDefault();

        // You can handle the form submission logic here, e.g., posting the data to an API

        // For demonstration, you could alert the input values or reset the form
        const activity = $('#activity').val();
        const category = $('#category').val();
        const detailNote = $('#detailNote').val();

        alert(`Task Added:\nActivity: ${activity}\nCategory: ${category}\nDetail Note: ${detailNote}`);

        // Optionally, reset the form
        $('#addTodoDetailForm')[0].reset();
        $('#addTaskBtn').prop('disabled', true); // Disable the button after reset
    }); 

    $('.btn-danger').on('click', function() {
        if (confirm("Apa kamu yakin untuk menghapus Todo ini?")) {
            window.location.href = "home.html"; // Redirect to home
        }
    });

        // Show modal and pre-fill form with content from Todo Detail View Card
        $('#todoDetailCard').on('click', function() {
            const detailTitle = $('#detailTitle').text();
            const detailCategory = $('#detailCategory').text();
            const detailNoteText = $('#detailNoteText').text();
    
            // Pre-fill the modal form with the card details
            $('#modalDetailTitle').val(detailTitle);
            $('#modalDetailCategory').val(detailCategory);
            $('#modalDetailNote').val(detailNoteText);
    
            // Show the modal
            $('#todoDetailModal').modal('show');
        });
    
        // Handle Update Todo Detail button click
        $('#updateTodoDetailBtn').on('click', function() {
            // Get updated values from the form
            const updatedTitle = $('#modalDetailTitle').val();
            const updatedCategory = $('#modalDetailCategory').val();
            const updatedNote = $('#modalDetailNote').val();
    
            // Update the content on the Todo Detail View card
            $('#detailTitle').text(updatedTitle);
            $('#detailCategory').text(updatedCategory);
            $('#detailNoteText').text(updatedNote);
    
            // Close the modal
            $('#todoDetailModal').modal('hide');
        });
    
        // Handle Delete Todo Detail button click
        $('#deleteTodoDetailBtn').on('click', function() {
            if (confirm("Apa kamu yakin untuk menghapus Todo Detail ini?")) {
                window.location.href = "todo.html"; // You can change this to your actual logic
            }
        });

            $('#note, #day').on('input', function() {
        const noteVal = $('#note').val().trim();
        const dayVal = $('#day').val().trim();

        // Enable Add Task button only if both fields are filled
        if (noteVal !== '' && dayVal !== '') {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    });

        // // Form validation for enabling/disabling the Add Task button
    $('#note, #day').on('input', function() {
        const noteVal = $('#note').val().trim();
        const dayVal = $('#day').val().trim();

        // Enable Add Task button only if both fields are filled
        if (noteVal !== '' && dayVal !== '') {
            $('#addTaskBtn').prop('disabled', false);
        } else {
            $('#addTaskBtn').prop('disabled', true);
        }
    });

    // Handle Add Task form submission
    $('#addTodoForm').on('submit', function(e) {
        e.preventDefault();

        // You can handle the form submission logic here (e.g., posting to a server)
        const note = $('#note').val();
        const day = $('#day').val();

        alert(`Task Added:\nNote: ${note}\nDay: ${day}`);

        // Optionally, reset the form and disable the Add Task button again
        $('#addTodoForm')[0].reset();
        $('#addTaskBtn').prop('disabled', true);
    });

    $(document).ready(function() {
        // Redirect to profile.html when the settings icon is clicked
        $('.settings-icon').on('click', function() {
            window.location.href = 'profile.html';
        });
    });
});


