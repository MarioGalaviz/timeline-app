import { Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from 'moment'
import { data } from "../data/data";
import { GiMexico, GiMaterialsScience, GiOpenBook, GiGunshot } from 'react-icons/gi'
export default function Timeline() {

    const [dia, setDia] = useState()
    const [todo, setTodo] = useState({
        valorInicio: 1,
        valorFinal: 1,
        valorBachNacimiento: 1,
        valorBachMuerte: 1,
        inicio: 1,
        final: 1
    })

    const modos = [
        {
            nombre: 'grande',
            p: 2,
            pPeriodo: 4,
            letra: 'h5',
            altura: 50,
            alturaSucesos: 25,
            alturaPeriodos: 60
        },
        {
            nombre: 'pequeno',
            p: 0,
            pPeriodo: 2,
            letra: 'h6',
            altura: 28,
            alturaSucesos: 20,
            alturaPeriodos: 35
        },
    ]

    const [modo, setModo] = useState(modos[0])
    const [alturaPersonas, setAlturaPersonas] = useState(1)
    const [alturaSucesos, setAlturaSucesos] = useState(1)
    const [alturaPeriodos, setAlturaPeriodos] = useState(1)

    const alturaSucesosFijados = 70

    const periodosData = [
        {
            nombre: 'Revolución Industrial',
            inicio: 1760,
            final: 1840

        },
    ]

    const sucesosData = [
        {nombre: 'Primera Guerra Mundial', tipo: 'Guerra', year: '1914'},
        {nombre: 'Segunda Guerra Mundial', tipo: 'Guerra', year: '1939'},
        {nombre: 'Spining Jenny', tipo: 'Invento', year: '1765'},
        {nombre: 'Steam engine', tipo: 'Invento', year: '1712'},
        {nombre: 'Power loom', tipo: 'Invento', year: '1786'},
        {nombre: 'Guerra y paz', tipo: 'Libro', year: '1869'},
        {nombre: 'Alicia en el país de las maravillas', tipo: 'Libro', year: '1865'},
        {nombre: 'Tom Sawyer', tipo: 'Libro', year: '1876'},
        {nombre: 'Ulises', tipo: 'Libro', year: '1922'},
        {nombre: 'En búsqueda del tiempo perdido', tipo: 'Libro', year: '1913'},
        {nombre: 'Crimen y castigo', tipo: 'Libro', year: '1866'},
        {nombre: 'Independencia de México', tipo: 'México', year: '1821'},
        {nombre: 'Tratado Guadalupe-Hidalgo', tipo: 'México', year: '1848'},
    ]

    

   

    const [marcas, setMarcas] = useState([])
    
    useEffect(() => {
        const inicio = '1600'
        const final = '2000'
        const inicioNum = parseInt(inicio)
        const finalNum = parseInt(final)
        const dateInicio = new Date(inicio)
        const dateFinal = new Date(final)
        const valorInicio = moment(dateInicio).valueOf()
        const valorFinal = moment(dateFinal).valueOf()
        let arrMarcas = []
        let i = inicioNum
        const periodicidad = 10
        while ((i) < finalNum) {
            
            arrMarcas.push(i)
            i += periodicidad
        }
        setMarcas(arrMarcas)
        console.log(data[0].fechas)

        const fechasBach = data[0].fechas

        const bachNacimiento = fechasBach.list[0] + '-' + fechasBach.list[1] + '-' + fechasBach.list[2]

        const bachMuerte = fechasBach.year + '-' + fechasBach.month + '-' + fechasBach.day

        const dateBachNacimiento = new Date(bachNacimiento)
  

        const dateBachMuerte = new Date(bachMuerte)
     

        const valorBachNacimiento = moment(dateBachNacimiento).valueOf()
        const valorBachMuerte = moment(dateBachMuerte).valueOf()
        const todo = {
            valorInicio: parseInt(valorInicio),
            valorFinal: parseInt(valorFinal),
            valorBachNacimiento: parseInt(valorBachNacimiento),
            valorBachMuerte: parseInt(valorBachMuerte),
            inicio: inicioNum,
            final: finalNum
        }
        setTodo(todo)

        setAlturaPersonas((data.length + 1)* modo.altura)
        setAlturaSucesos((sucesosData.length + 1)* modo.alturaSucesos)
        setAlturaPeriodos((periodosData.length + 1)* modo.alturaPeriodos)
    }, [])

    const changeModo = () => {
        if (modo.nombre === 'grande') {
            setModo(modos[1])
            setAlturaPersonas((data.length + 1)* modos[1].altura)
            setAlturaSucesos((sucesosData.length + 1)* modos[1].alturaSucesos)
            setAlturaPeriodos((periodosData.length + 1)* modos[1].alturaPeriodos)
        } else {
            setModo(modos[0])
            setAlturaPersonas((data.length + 1)* modos[0].altura)
            setAlturaSucesos((sucesosData.length + 1)* modos[0].alturaSucesos)
            setAlturaPeriodos((periodosData.length + 1)* modos[0].alturaPeriodos)
        }
    }
    
    return (
        <Box>
            <Box display='flex' justifyContent='center'>
                <Button variant='outlined' onClick={changeModo}>{modo.nombre === 'grande' ? 'Modo pequeño' : 'Modo grande'}</Button>
            </Box>
            
            <Box position='sticky' top={0} sx={{ my: 2, overflow: 'hidden' }} height='85px' zIndex={1000}>
                <Box position='relative'>

                
                <Box backgroundColor='background.default' height='85px' position='absolute' sx={{ opacity: '0.8' }} width='100%'>
          
                </Box>
                {marcas.map(marca => (
                    <Box display={marca % 100 === 0 ? '' : 'none'} backgroundColor='transparent' position='absolute' left={((marca-todo.inicio)/(todo.final-todo.inicio))*100+'%'}>
                        <Box>
                        <Typography variant='h2' sx={{ my: 1 }}>{marca}</Typography>
                        </Box>
                    </Box>
                ))}
               </Box>
               <Box position='relative'  height={(alturaSucesos * 4 / 12) + alturaPeriodos +'px'} top='85px' width='100%' t>
               
                {periodosData.map((periodo, index) => (
                    <Box sx={{ py: modo.pPeriodo, overflowWrap: 'initial' }} backgroundColor='primary.main'
                    width={(periodo.final-periodo.inicio)/(todo.final-todo.inicio)*100+'%'} position='absolute' top={(index*modo.alturaPeriodos)+'px'} left={((periodo.inicio-todo.inicio)/(todo.final-todo.inicio))*100 + '%'}>
                        <Typography variant={modo.letra} color='white' fontWeight='bold' align='center'>{periodo.nombre}</Typography>
                    </Box>
                ))}
                {sucesosData.filter(suceso => suceso.tipo === 'Guerra' || suceso.tipo === 'México').map((suceso, index) => (
                    <Box display='flex' alignItems='center' position='absolute' top={alturaPeriodos + (index*modo.alturaSucesos)+'px'} left={((suceso.year-todo.inicio)/(todo.final-todo.inicio))*100+'%'}>
                        
                        <Box color='triadic.a'>

                        {suceso.tipo === 'México' && <GiMexico size={35}/>}
                        {suceso.tipo === 'Invento' && <GiMaterialsScience size={35}/>}
                        {suceso.tipo === 'Libro' && <GiOpenBook size={30}/>}
                        {suceso.tipo === 'Guerra' && <GiGunshot size={30}/>}
                        </Box>
                        <Typography noWrap sx={{ mx: 1 }} variant='h6'>{suceso.nombre}</Typography>
                    </Box>
                ))}
              
              </Box>
                
            </Box>
            

           
      
        
       
            <Box position='relative' sx={{ mb: 8, overflow: 'hidden' }} height={alturaPeriodos + alturaSucesos + alturaPersonas +'px'}>
                {marcas.map((marca, index) => (
                    <Box width={marca % 100 === 0 ? '3px' : (marca % 50 === 0 ? '1.5px' : '0.5px')} backgroundColor={marca % 50 === 0 ? 'primary.main' : 'text.secondary'} height='100%' position='absolute' left={((marca-todo.inicio)/(todo.final-todo.inicio))*100+'%'}>
                        </Box>
                ))}
                {/* {periodosData.map((periodo, index) => (
                    <Box sx={{ py: modo.pPeriodo }} backgroundColor='primary.main'
                    width={(periodo.final-periodo.inicio)/(todo.final-todo.inicio)*100+'%'} position='absolute' top={(index*modo.alturaPeriodos)+'px'} left={((periodo.inicio-todo.inicio)/(todo.final-todo.inicio))*100 + '%'}>
                        <Typography variant={modo.letra} color='white' fontWeight='bold' align='center'>{periodo.nombre}</Typography>
                    </Box>
                ))} */}
                {sucesosData.filter(suceso => suceso.tipo !== 'Guerra' && suceso.tipo !== 'México').map((suceso, index) => (
                    <Box display='flex' alignItems='center' position='absolute' top={alturaSucesosFijados + alturaPeriodos + (index*modo.alturaSucesos)+'px'} left={((suceso.year-todo.inicio)/(todo.final-todo.inicio))*100+'%'}>
                        
                        <Box color='triadic.a'>

                        {suceso.tipo === 'México' && <GiMexico size={35}/>}
                        {suceso.tipo === 'Invento' && <GiMaterialsScience size={35}/>}
                        {suceso.tipo === 'Libro' && <GiOpenBook size={30}/>}
                        {suceso.tipo === 'Guerra' && <GiGunshot size={30}/>}
                        </Box>
                        <Typography noWrap sx={{ mx: 1 }} variant='h6'>{suceso.nombre}</Typography>
                    </Box>
                ))}
                {data.map((persona, index) => (
                    <Box sx={{ py: modo.p }} backgroundColor={persona.tipo === 'Músico' ? 'primary.main' : ((persona.tipo === 'Pintor' || persona.tipo === 'Escultor' ) ? 'secondary.main' : (persona.tipo === 'Pensador' ? 'analogous.a' : ((persona.tipo === 'Científico' || persona.tipo === 'Matemático' ) ? 'analogous.b' : 'triadic.b')))}
                    width={(persona.muerteNum-persona.nacimientoNum)/(todo.valorFinal-todo.valorInicio)*100+'%'} position='absolute' top={alturaPeriodos + alturaSucesos+(index*modo.altura)+'px'} left={((persona.nacimientoNum-todo.valorInicio)/(todo.valorFinal-todo.valorInicio))*100 + '%'}>
                        <Typography variant={modo.letra} color='white' fontWeight='bold' align='center'>{persona.nombre}</Typography>
                    </Box>
                ))}
                
            </Box>
            
        </Box>
    )
}