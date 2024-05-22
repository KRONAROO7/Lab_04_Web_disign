 // Отримуємо модальне вікно
    var modal = document.getElementById("myModal");

    // Отримуємо кнопку, яка відкриває модальне вікно
    var btn = document.getElementById("openModalBtn");

    // Отримуємо елемент <span>, який закриває модальне вікно
    var span = document.getElementsByClassName("close")[0];

    // Коли користувач натискає на кнопку, відкриваємо модальне вікно
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Коли користувач натискає на <span> (хрестик), закриваємо модальне вікно
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Коли користувач натискає будь-де поза модальним вікном, закриваємо його
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }