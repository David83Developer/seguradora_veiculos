


    var form = document.querySelector('.show-form');

    document.querySelector('.whatsapp-web').addEventListener('click', ()=>{

        form.style.display = 'block';

    });

    document.getElementById('number').addEventListener('input', function (e) {
        var input = e.target.value.replace(/\D/g, '').substring(0, 11);
        var formattedInput = '(' + input.substring(0, 2) + ') ' + input.substring(2, 3) + ' ' + input.substring(3, 7) + '-' + input.substring(7);
        e.target.value = formattedInput;
    });

    function HoraAtual(){
        var currentDate = new Date();

        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        var day = ('0' + currentDate.getDate()).slice(-2);
        var formattedDate = year + '-' + month + '-' + day;

        var hours = ('0' + currentDate.getHours()).slice(-2);
        var minutes = ('0' + currentDate.getMinutes()).slice(-2);
        var seconds = ('0' + currentDate.getSeconds()).slice(-2);
        var formattedTime = hours + ':' + minutes + ':' + seconds;

        var datetime = formattedDate + ' ' + formattedTime;

        // Define o valor do campo de entrada 'datetime'
        document.getElementById('datetime').value = datetime;

        console.log(document.getElementById('datetime').value)
    }



    ////// CODIGO API DO WHATS 

    document.getElementById('send-whatsapp').addEventListener('click', function () {

        let tel = '5521973088672';

        var state = document.getElementById('Form-State').value;

        switch(state) {
            case 'RIO DE JANEIRO':
                tel = '5521973088672';
                break;
            case 'MINAS GERAIS':
                tel = '553199786330';
                break;
            default:
                tel = '5521969298899';
        }

        /*
        if(state === 'RIO DE JANEIRO'){

            tel = '5521973088672';
        }
        if(state === 'MINAS GERAIS'){

                tel = '553199786330';

        }else{
            tel = '5521969298899';
        }
        */
        
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
       var message = document.getElementById('MSG').value;

        if (!state || !name || !number || !message) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        
        var url = 'https://api.whatsapp.com/send?phone=' + tel + '&text=' + '\Advogado Consumidor: ' + message;

        // Abrir a URL no navegador
        window.open(url, '_blank');
    });


    ////// CODIGO SCRIPT GOOGLE SHEETS

    const username = '9qo9efv4';
    const password = '3khzg75iir8lro2germd';
    const apiURL = 'https://sheetdb.io/api/v1/1529hepzxaq74';

    // Função para enviar os dados do formulário para a API
    async function enviarDadosParaAPI(dados) {
    try {
        const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
        });

        if (!response.ok) {
        throw new Error('Erro ao enviar os dados para a API: ' + response.statusText);
        }

        form.style.display = 'none';
        
    } catch (error) {
       
        
    }
    }

    function pegarDDD() {
        var number = document.getElementById('number').value;
        var ddd = number.substring(1, 3);
        document.getElementById('ddd').value = ddd;
    }


    // Função para lidar com o envio do formulário
    function handleFormSubmit(event) {


        
        HoraAtual();
        pegarDDD();

        event.preventDefault();

        const formData = new FormData(event.target);
        const dados = {};
        formData.forEach((value, key) => {
            dados[key] = value;
        });

        // Chamada para enviar os dados para a API
        enviarDadosParaAPI(dados);
        console.log(dados);

        
    }

    // Adicione um listener para o evento de submit do formulário
    const formulario = document.querySelector('.show-form form');
    formulario.addEventListener('submit', handleFormSubmit);

