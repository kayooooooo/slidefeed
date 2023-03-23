function createSlide() {
        fetch(
          "https://newsapi.org/v2/everything?q=brasil&sortBy=popularity&apiKey=f3d61e20140d4bfc98b1dc893cd0d805"
        )
          .then((response) => response.json())
          .then((data) => {
          console.log('data', data);
            const slider = document.querySelector("#slider");
            const slicedData = data.articles.slice(0, 10);
            console.log(slicedData);

            let index = 0;
            const img = document.querySelector(".slide");
            const urls = slicedData.map((item) => item.urlToImage);
            img.src = urls[index];

            const h3 = document.querySelector(".title");
            const title = slicedData.map((item) => item.title);
            h3.textContent = title[index];

            function changeImage() {
              index = (index + 1) % urls.length;
              img.src = urls[index];

              index = (index + 1) % title.length;
              h3.textContent = title[index];
            }

            setInterval(changeImage, 5000);
          })
          .catch((error) => console.log(error));
      }

      createSlide();

      const btnOpen = document.querySelector("#btnapi");
      btnOpen.innerText = "Acessar";

      btnOpen.addEventListener("click", function () {
        var divbtn = document.getElementById("slideshow");

        // Crie um elemento de iframe e defina seu atributo "src" para o link retornado pela API
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.google.com.br/");
        iframe.setAttribute("id", "iframe-close");

        // Defina o estilo do iframe para ocupar toda a tela do dispositivo
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";

        // Adicione o iframe ao corpo da página
        divbtn.prepend(iframe);

        var btn_fechar = document.getElementById("btn-close");
        btn_fechar.style.display = "block";
        btn_fechar.style.zIndex = "1";
      });
      function dismiss() {
        var iframe_of = document.getElementById("iframe-close");
        var btn_fechar = document.getElementById("btn-close");
        iframe_of.remove();
        btn_fechar.style.display = "none";
      }