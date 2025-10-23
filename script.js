const marcas = document.getElementById('marcas');
const selectContainer = document.getElementById('select-container');
const modelos = document.getElementById('modelos');

fetch('http://localhost:8888/marcas')
    .then(response => response.text())
    .then(data => {
        const marcas = data.split('\n')
        marcas.forEach(marca => {
            const option = document.createElement('option')
            option.vaue = marca
            option.textContent = marca
            marcasSelect.appendChild(option)
        })

        marcasSelect.addEventListener('change', () => {
            const selectedMarca = marcasSelect.value
            cargarModelos(selectedMarca)
        })
    })

    function cargarModelos(marca) {
        fetch(`http://localhost:8888/modelos/${marca}`)
            .then(response => response.tect())
            .then(data => {
                const modelos = data.split('\n')
                modelosSelect.innerHTML = '<option value="">Seleccione un modelo</option>'
                modelos.forEach(modelo => {
                    const option = document.createElement('option')
                    option.value = modelo
                    option.textContent = modelo

                    option.classList.add(`is-${marca}`)
                    modelosSelect.appendChild(option)
                })
            })
    }

    modelosSelect.addEventListener('change', () => {
        const modelo = modelosSelect.value

        if(modelo) {
            alert(`Modelo seleccionado: ${modelo}`)
        }
    })