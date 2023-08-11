// https://www.omdbapi.com/?i=tt3896198&apikey=148d83e8


const apiKey = '148d83e8'
        const frmPesquisa = document.querySelector('form')

        frmPesquisa.onsubmit = (submitEvent) => {
            submitEvent.preventDefault();

            const pesquisa = submitEvent.target.pesquisa.value;
            
            alert('ok')

            if (pesquisa == '') {
                alert ('Preencha o campo!')
                return;
            }

            fetch('https://www.omdbapi.com/?s=' + pesquisa + '&apiKey=' + apiKey)
                .then(result => result.json())
                .then(json => loadList(json));
        }

        const loadList = (json) => {
            const lista = document.querySelector('.lista');
            lista.innerHTML = '';

            if (!json.Response == 'False') {
                alert('Nenhum filme encontrado')
            }

            json.Search.forEach(element => {
                console.log(element)

                let item = document.createElement('div');
                item.classList.add('item')

                item.innerHTML = '<img src="' + element.Poster + '" /><h2>' + element.Title + '</h2>'

                // preciso inserir qual o pai dese ter nossa lista fuilho
                lista.appendChild(item);
            })
        }
