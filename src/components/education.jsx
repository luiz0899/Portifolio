import React from 'react';
import '../style/components/education.sass'

const form = [
  { institution: "Senai Tubarão", training: "Técnico Desenvolvimento", city: "Tubarão" },
  { institution: "Senai Capivari de baixo", training: "Técnico Automação", city: "Tubarão" },
  { institution: "E.E.B Domingos Barbosa Cabral", training: "Ensino Médio", city: "Pescaria Brava" },
];
const Education = () => {
  return (
    <section className='Education-container'>
      <h2>Educação</h2>
      <div className='Education-grid'>
        {form.map((FormTech) => (
          <div className='Education-card' key={FormTech.institution}>
            <p> {FormTech.institution}</p>
            <div>
              <h3>
                {FormTech.training}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
