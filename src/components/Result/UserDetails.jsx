import './index.css'

const UserDetails = () => {

    const peoples = [
        {id: 1, name: "Edmar", age: 21, job: "Dev JR"},
        {id: 2, name: "Fábio", age: 8, job: "Estudante"},
        {id: 3, name: "Ana Flávia", age: 42, job: "Estrumentadora"}
    ]

    return (
        <div className="container">
            <h1>*Retorno do UAI*</h1>
            <ul className='list'>
                {peoples.map((people, id) => (
                    <li key={id}>
                        <h4>Candidato: {people.id}</h4>
                        <p>Nome: {people.name}</p>
                        <p>Idade: {people.age}</p>
                        <p>Profissão: {people.job}</p>
                        <p>{people.age >= 18 ? 'Você pode dirigir!!' : 'Você não pode dirigir!!'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserDetails