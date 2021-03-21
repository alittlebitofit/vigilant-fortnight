let button = document.querySelector('button')

button.addEventListener('click', function() {

    let mass = document.querySelector('#mass').value

    if (mass !== '') {

        mass = parseFloat(mass)

        console.log('mass: ', mass)

        let select = document.querySelector('select')

        let option = select.value

        console.log('option: ', option)

        if (option === 'none') {

            let hideImage = document.querySelector('.flex-item')
            hideImage.classList.add('hide')

            let divDescription = document.querySelector('.description')
            divDescription.classList.remove('hide')
            divDescription.classList.add('pad')


            let weightDescription = document.querySelector('#weight-description')
            weightDescription.innerHTML = 'You did not choose an option yet'

            console.log('hidden')

        } else {

            let acceleration = 0
            let image = document.querySelector('img')
            image.src = './images/' + option + '.png'

            let displayImage = document.querySelector('.flex-item')
            displayImage.classList.remove('hide')

            let divDescription = document.querySelector('.description')
            divDescription.classList.remove('hide')
            divDescription.classList.add('pad')

            let weightDescription = document.querySelector('#weight-description')
            weightDescription.innerHTML = 'The weight of the object on <strong>' + option.toUpperCase() + '</strong>'

            switch (option) {

                case 'mercury':
                    acceleration = 3.7
                    break
                case 'venus':
                    acceleration = 8.87
                    break
                case 'earth':
                    acceleration = 9.8
                    break
                case 'moon':
                    acceleration = 1.62
                    break
                case 'mars':
                    acceleration = 3.711
                    break
                case 'jupiter':
                    acceleration = 24.79
                    break
                case 'saturn':
                    acceleration = 10.44
                    break
                case 'uranus':
                    acceleration = 8.69
                    break
                case 'neptune':
                    acceleration = 11.15
                    break
                case 'pluto':
                    acceleration = 0.62
                    break
                default:
                    alert('bruh what u doin')
                    break

            }

            let force = mass * acceleration
            force = force.toFixed(2)

            console.log("force: ", force)

            let weightValue = document.querySelector('#weight-value')
            weightValue.classList.remove('hide')
            // weightValue.classList.add('pad')
            weightValue.innerHTML = '<strong>' + force + ' N</strong>'


        }

    } else {

            let hideImage = document.querySelector('.flex-item')
            hideImage.classList.add('hide')

            let divDescription = document.querySelector('.description')
            divDescription.classList.remove('hide')
            divDescription.classList.add('pad')

            let weightDescription = document.querySelector('#weight-description')
            weightDescription.innerHTML = 'Mass is required'
    }

})