function showPreview() {
    var jsCode = document.getElementById("jsCode").value;
    var iframe = document.getElementById("preview-window");
    iframe.srcdoc = jsCode;
}

function showPreview2() {
    var htmlCode2 = document.getElementById("htmlCode2").value;
    var iframe2 = document.getElementById("preview-window2");
    iframe2.srcdoc = htmlCode2;
}

function loadCalendar() {
    document.getElementById("jsCode").value = `
<!DOCTYPE html>
<head>
</head>
<body>
    <p><input type="text" id="year" placeholder="Enter year YYYY"/></p>
    <p><input type="button" value="Calendar" onclick="showCalendar()"></p>
    <p id="calendar"></p>
    <script>
        function showCalendar() {
            var year = document.getElementById("year").value;

            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var calendarHTML = "<table>";
            for (var i = 0; i < 12; i++) {
                var month = i + 1;
                var firstDay = new Date(year, i, 1);
                var lastDay = new Date(year, i + 1, 0);
                var daysInMonth = lastDay.getDate();

                calendarHTML += "<tr><td colspan='7' align='center'><b>" + monthNames[i] + " " + year + "</b></td></tr>";
                calendarHTML += "<tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>";
                var currentDay = 1;
                for (var j = 0; j < 6; j++) {
                    calendarHTML += "<tr>";
                    for (var k = 0; k < 7; k++) {
                        if (currentDay <= daysInMonth) {
                            if ((j === 0 && k < firstDay.getDay()) || (currentDay === 1 && k < firstDay.getDay())) {
                                calendarHTML += "<td>&nbsp;</td>";
                            } else {
                                calendarHTML += "<td>" + currentDay + "</td>";
                                currentDay++;
                            }
                        } else {
                            calendarHTML += "<td>&nbsp;</td>";
                        }
                    }
                    calendarHTML += "</tr>";
                }
            }
            calendarHTML += "</table>";
            document.getElementById("calendar").innerHTML = calendarHTML;
        }
    </script>
</body>
</html>`;
}

function loadMonthHighlight() {
    document.getElementById("jsCode").value = `
<!DOCTYPE html>
<head>
</head>
<body>
    <p><input type="text" id="month" placeholder="Enter month MM"/></p>
    <p><input type="text" id="year" placeholder="Enter year YYYY"/></p>
    <p><input type="button" value="Highlight Month" onclick="highlightMonth()"></p>
    <p id="highlighted"></p>
    <script>
        function highlightMonth() {
            var month = document.getElementById("month").value;
            var year = document.getElementById("year").value;

            var monthElement = document.createElement("span");
            monthElement.style.backgroundColor = "yellow";
            monthElement.style.fontWeight = "bold";
            monthElement.textContent = month;

            var yearElement = document.createElement("span");
            yearElement.style.backgroundColor = "lightblue";
            yearElement.style.fontWeight = "bold";
            yearElement.textContent = year;

            document.getElementById("highlighted").innerHTML = "Highlighting month: " + monthElement.outerHTML + " " + yearElement.outerHTML;
        }
    </script>
</body>
</html>`;
}

function loadDateHighlight() {
    document.getElementById("jsCode").value = `
<!DOCTYPE html>
<head>
</head>
<body>
    <p><input type="text" id="day" placeholder="Enter day DD"/></p>
    <p><input type="text" id="month" placeholder="Enter month MM"/></p>
    <p><input type="text" id="year" placeholder="Enter year YYYY"/></p>
    <p><input type="button" value="Highlight Date" onclick="highlightDate()"></p>
    <p id="highlighted"></p>
    <script>
        function highlightDate() {
            var day = document.getElementById("day").value;
            var month = document.getElementById("month").value;
            var year = document.getElementById("year").value;

            var dayElement = document.createElement("span");
            dayElement.style.backgroundColor = "yellow";
            dayElement.style.fontWeight = "bold";
            dayElement.textContent = day;

            var monthElement = document.createElement("span");
            monthElement.style.backgroundColor = "lightblue";
            monthElement.style.fontWeight = "bold";
            monthElement.textContent = month;

            var yearElement = document.createElement("span");
            yearElement.style.backgroundColor = "lightgreen";
            yearElement.style.fontWeight = "bold";
            yearElement.textContent = year;

            document.getElementById("highlighted").innerHTML = "Highlighting date: " + dayElement.outerHTML + " " + monthElement.outerHTML + " " + yearElement.outerHTML;
        }
    </script>
</body>
</html>`;
}

function loadCurrentDate() {
    document.getElementById("jsCode").value = `
<!DOCTYPE html>
<html>
<head>
</head>
<body style="background-color:mediumslateblue;" "text-align:center;">
    <h1 style="color:white;">Current Date</h1>
    <p id="currentDate" style="color:white;"></p>
    <script>
        var date = new Date();
        document.getElementById("currentDate").innerHTML = date;
    </script>
</body>
</html>`;
}

