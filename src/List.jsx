import {
	Badge,
	Box,
	Button,
	Container,
	Flex,
	Image,
	Tab,
	Table,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import React from 'react';

import { Link as BuenLink } from 'react-router-dom';

const user = [
	{ nombre: 'Pedro', edad: 20, carrera: 'Ingeniería', hobbie: 'Futbol' },
	{
		nombre: 'Rodrigo',
		edad: 22,
		carrera: 'Arquitectura',
		hobbie: 'Bajo eléctrico',
	},
	{ nombre: 'Romina', edad: 21, carrera: 'Abogacía', hobbie: 'Acrobacia' },
	{ nombre: 'Ana', edad: 23, carrera: 'Contadora', hobbie: 'Astronomía' },
];

function List() {
	return (
		<Box>
			<Button>
				<BuenLink to='/form'>Form</BuenLink>
			</Button>

			<Flex direction='column' pt={{ base: '120px', md: '75px', sm: '20px' }}>
				<Container maxW={'container.xl'}>
					<Tabs variant='enclosed'>
						<TabList>
							<Tab>Usuarios</Tab>
						</TabList>
						<TabPanels>
							<TabPanel p={0}>
								<Table variant='simple' color='gray.500'>
									<Thead>
										<Tr my='.8rem' pl='0px' color='gray.400'>
											<Th color='gray.400'>Nombre</Th>
											<Th color='gray.400'>Edad</Th>
											<Th color='gray.400'>Carrera</Th>
											<Th color='gray.400'>Hobbie</Th>
										</Tr>
									</Thead>

									{user.map((el, ind) => (
										<Tbody key={ind}>
											<Tr>
												<Td minWidth={{ sm: '250px' }} pl='0px'>
													<Flex
														align='center'
														py='.8rem'
														minWidth='100%'
														flexWrap='nowrap'
														pl={'4'}
													>
														<Image w='40px' borderRadius='10px' me='18px' />
														<Flex direction='column'>
															<Text
																fontSize='md'
																fontWeight='bold'
																minWidth='10px'
															>
																{el.nombre}
															</Text>
															<Text
																fontSize='sm'
																color='gray.400'
																fontWeight='normal'
															></Text>
														</Flex>
													</Flex>
												</Td>

												<Td>
													<Flex direction='column'>
														<Text
															fontSize='sm'
															color='gray.700'
															fontWeight='normal'
														>
															{el.edad}
														</Text>
													</Flex>
												</Td>

												<Td>
													<Text fontSize='md' fontWeight='bold' pb='.5rem'>
														{el.carrera}
													</Text>
												</Td>
												<Td>
													<Text
														fontSize='md'
														fontWeight='bold'
														pb='.5rem'
														color='blue.500'
													>
														{el.hobbie}
													</Text>
												</Td>
											</Tr>
										</Tbody>
									))}
								</Table>
							</TabPanel>
							<TabPanel p={0}>sadsdsd</TabPanel>
						</TabPanels>
					</Tabs>
				</Container>
			</Flex>
		</Box>
	);
}

export default List;
