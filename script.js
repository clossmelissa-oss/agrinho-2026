function simular(pratica) {
    // Captura o elemento HTML onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado-simulacao');
    
    // Adiciona uma classe CSS para mudar o estilo da caixa (borda verde)
    resultadoDiv.classList.add('ativo');

    // Cria variáveis para guardar o título e a lista de benefícios
    let titulo = "";
    let beneficios = [];

    // Estrutura de decisão para checar qual botão foi clicado
    if (pratica === 'plantio') {
        titulo = "Estatísticas do Plantio Direto";
        beneficios = [
            "<strong>Erosão do solo:</strong> Redução de até 90% na perda de terra fértil.",
            "<strong>Economia de Combustível:</strong> Redução de até 60% no uso de tratores (menos emissão de CO₂).",
            "<strong>Retenção de Água:</strong> O solo armazena muito mais umidade, protegendo a lavoura em estiagens."
        ];
    } else if (pratica === 'drones') {
        titulo = "Estatísticas do Uso de Drones e IA";
        beneficios = [
            "<strong>Defensivos Agrícolas:</strong> Economia de até 40% aplicando apenas onde há pragas.",
            "<strong>Rapidez:</strong> Mapeamento completo da saúde da lavoura em poucos minutos.",
            "<strong>Produtividade:</strong> Identificação precoce de doenças, evitando a perda da safra."
        ];
    } else if (pratica === 'reuso') {
        titulo = "Estatísticas de Reuso e Irrigação Inteligente";
        beneficios = [
            "<strong>Consumo de Água:</strong> Redução de até 50% no uso de recursos hídricos dos rios.",
            "<strong>Energia Elétrica:</strong> Sistemas automatizados reduzem a conta de luz do produtor.",
            "<strong>Sustentabilidade:</strong> Preservação dos lençóis freáticos e bacias hidrográficas locais."
        ];
    }

    // Monta o HTML dinâmico que será inserido na página
    let htmlResultado = `<h4>${titulo}</h4><ul>`;
    
    // Passa por cada benefício gerando uma linha de lista (li)
    beneficios.forEach(function(item) {
        htmlResultado += `<li>${item}</li>`;
    });
    
    htmlResultado += `</ul>`;

    // Atualiza o conteúdo da caixa na tela
    resultadoDiv.innerHTML = htmlResultado;
}