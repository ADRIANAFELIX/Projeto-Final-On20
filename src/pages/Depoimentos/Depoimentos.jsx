import { useState, useEffect } from 'react'
 import Footer from '../../Componentes/Footer/Footer'
 
 import './depoimentos.css'
 
 function Depoimentos() {
   const getLocalList = () => {
     let items = localStorage.getItem('list')
     if(items) {
       return JSON.parse(localStorage.getItem('list'))
     } else {
       return []
     }
   }
   const [list, setList] = useState(getLocalList)
   const [newItem, setNewItem] = useState('')
 
   function handleCreateNewItem() {
     event.preventDefault();
     console.log("entrei");
     
     const item = {
       id: Math.random(),
       title: newItem
     }
 
     if (item.title === '') {
       return
     }
 
     setList([...list, item])
     setNewItem('')
   }
 
   function handleRemoveItem(id) {
     const itemsFiltered = list.filter(item => item.id == id)
     setList(itemsFiltered)
   }
   useEffect(() => {
     localStorage.setItem('list', JSON.stringify(list))
   }, [list])
 
   return(
   <>
     <section className='depoimentos'>
       <section className="list">
         <header>
           <form onSubmit={handleCreateNewItem}>
             <div className="input-container">
               <input 
                 type="text"
                 placeholder="Deixe seu relato aqui"
                 onChange={(e) => setNewItem(e.target.value)}
                 value={newItem}
               />
               <div className="add-container">
                 <button 
                   type='submit'
                   className="add-task" 
                   >
                   Clique aqui
                 </button>
               </div>
             </div>
           </form>
         </header>
         <main>
           <div className='div-relato'>
             <div className='relato'>
               <p>"O principe encantado sumiu depois que fui convidada a mora com ele, passou a me trancar dentro de casa.
                 Depois que o vi com uma mulher me traindo resolvi sair de casa, mas descobri que estava grávida e fui 
                 convencida a dar mais uma chance. A partir dai, após o nascimento do bebê as violências psicológicas e físicas
                 aumentaram ainda mais". Relatos da vítima.
               </p>
             </div>
             <div className='relato1'>
               <p>Um dia meu ex companheiro chegou bêbado em casa e me bateu mais uma vez, mas desta vez, mas infelizmente ele não ia parar por ali.
                 Queria incêndiar a casa comigo dentro" relata a vítima abalada.
               </p>           
             </div>
           </div>
           <ul className="list-items">
             {
               list.map(item => {
                 return(
                   <li key={item.id}>
                     <div>
                       <p>{item.title}</p>
                     </div>
                     <button 
                       className="remove-task" 
                       type="button"
                       onClick={() => handleRemoveItem(item.id)}
                     >
                       
                     </button>
                   </li>
                 )
               })
             }
           </ul>
         </main>
       </section>
     </section>
 
     <footer>
       <Footer/>
     </footer>
   </>
   
  )
 }
 
    
 export default Depoimentos