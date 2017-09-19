$(document).ready(function() {
  $('.ui.dropdown').dropdown();
});

$(function() {

  $("h4")
    .wrapInner("<span>");

  $("h4 br")
    .before("<span class='spacer'>")
    .after("<span class='spacer'>");

});

$(function() {

  $("h5")
    .wrapInner("<span>");

  $("h5")
    .before("<span class='spacer'>")
    .after("<span class='spacer'>");

});


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      // label: '体重',
      backgroundColor: 'rgba(80, 80, 80 1)',
      borderColor: 'rgba(255, 226, 31, 1)',
      pointColor: "rgba(151,187,205,1)",
      // pointStrokeColor: "#fff",
      data: [105, 103, 103, 101, 98, 98, 96]
    }]
  },
  options: {
    legend: {
         display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel;
        }
      },
      title: {
        display: true,
        fontColor: 'blue',
        text: 'Custom Chart Title'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            fontColor: 'red'
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: 'green'
          },
        }]
      }
    }
  }
});

$('.rapid.example .ui.button')
  .on('click', function() {
    var
      $progress = $('.rapid.example .ui.progress'),
      $button = $(this),
      updateEvent;
    // restart to zero
    clearInterval(window.fakeProgress)
    $progress.progress('reset');
    // updates every 10ms until complete
    window.fakeProgress = setInterval(function() {
      $progress.progress('increment');
      $button.text($progress.progress('get value'));
      // stop incrementing when complete
      if ($progress.progress('is complete')) {
        clearInterval(window.fakeProgress)
      }
    }, 10);
  });
