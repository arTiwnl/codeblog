import './style.css';

const ul = document.querySelector('ul')

function getApiGitHub () {
    fetch('https://api.github.com/users/artiwnl/repos')
    .then(async res =>{

        if(!res.ok) {
            throw new Error(res.status)
        }
        
        var data = await res.json()

        data.map(item => {
            let li = document.createElement('li')

            li.innerHTML = `
            
            <strong>${item.name.toUpperCase()}</strong>
            <span>  ${item.url} </span>
          
            
            `
            /*  <span> Data Criação:
                ${intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
            </span>*/

        ul.appendChild(li)

        })

    }).catch (e => console.log(e))

}

getApiGitHub ();



export function Body (){

    return(

        <div className='container1'>
         

            <div className='Cards'>
                
                <ul></ul>

            </div>


        </div>
    )
}