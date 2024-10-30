const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(grafico, {
    type: "pie",
    data: {
      labels: [
        "Instagram", 
        "WhatsApp", 
        "Facebook", 
        "WeChat", 
        "TikTok", 
        "DouYin", 
        "Twitter", 
        "Telegram", 
        "FB Messenger", 
        "LINE"
      ],
      datasets: [{
        data: [
          16.5, 
          16.1, 
          12.8, 
          12.8, 
          7.4, 
          6.6, 
          3.2, 
          2.4, 
          2.3, 
          1.7
        ],
        backgroundColor: [
          "#FA8072", 
          "#00FF7F",
          "#006400",
          "#ADFF2F",
          "#DAA520",
          "#BC8F8F",
          "#F5DEB3",
          "#BA55D3",
          "#FF1493",
          "#FF6347",        
        ],
      }
    ]
    }
  }
);
