import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	chakra,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	FormHelperText,
	useToast,
	FormErrorMessage,
	Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { Link as BuenLink } from 'react-router-dom';

function validate(input) {
	let errors = {};

	if (!input.name) {
		errors.name = 'Name is required';
	} else if (!input.email) {
		errors.email = 'Email required';
	} else if (!input.pass) {
		errors.pass = 'Password required';
	}
	return errors;
}

function Form() {
	const toast = useToast();

	const [input, setInput] = useState({
		name: '',
		email: '',
		pass: '',
	});
	const [errors, setErrors] = useState({});
	const [datos, setDatos] = useState({});

	const namesREGEX =
		/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

	function handleChange(e) {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setErrors(
			validate({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (Object.values(errors).length > 0) {
			toast({
				title: 'Error',
				description: 'Complete los campos',
				status: 'error',
				duration: '2000',
				isClosable: 'true',
			});
		} else if (!namesREGEX.test(input.name)) {
			toast({
				title: 'Invalid Name',
				status: 'warning',
				isClosable: 'true',
				duration: '2000',
			});
		} else {
			toast({
				title: 'Success',
				status: 'success',
				isClosable: 'true',
				duration: '2500',
				position: 'bottom-left',
			});
			setDatos({
				name: input.name,
				email: input.email,
				pass: input.pass,
			});
			setInput({
				name: '',
				email: '',
				pass: '',
			});
		}
	}

	return (
		<div>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bg={useColorModeValue('gray.50', 'gray.800')}
			>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
					<Center>
						<BuenLink to='/'>
							<Button>Home</Button>
						</BuenLink>
					</Center>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'}>Sign in to your account</Heading>
						<Text fontSize={'lg'} color={'gray.600'}>
							to enjoy all of our cool
						</Text>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						boxShadow={'lg'}
						p={8}
					>
						<Stack spacing={4}>
							<chakra.form onSubmit={(e) => handleSubmit(e)}>
								<FormControl isRequired isInvalid={errors.name}>
									<FormLabel
										fontSize='sm'
										fontWeight='md'
										color='gray.700'
										_dark={{
											color: 'gray.50',
										}}
									>
										Name
									</FormLabel>

									<Input
										type='text'
										value={input.name}
										onChange={handleChange}
										mt={1}
										name='name'
										shadow='sm'
										size='sm'
										w='full'
										rounded='md'
									/>
									{!errors.name ? (
										<FormHelperText>Name, text only</FormHelperText>
									) : (
										<FormErrorMessage>Name is required.</FormErrorMessage>
									)}
								</FormControl>
								<FormControl isRequired isInvalid={errors.email} pt={4}>
									<FormLabel
										fontSize='sm'
										fontWeight='md'
										color='gray.700'
										_dark={{
											color: 'gray.50',
										}}
									>
										Email
									</FormLabel>

									<Input
										type='text'
										value={input.email}
										onChange={handleChange}
										mt={1}
										name='email'
										shadow='sm'
										size='sm'
										w='full'
										rounded='md'
									/>
									{!errors.email ? (
										<FormHelperText></FormHelperText>
									) : (
										<FormErrorMessage>Email is required.</FormErrorMessage>
									)}
								</FormControl>
								<FormControl isRequired isInvalid={errors.pass}>
									<FormLabel
										fontSize='sm'
										fontWeight='md'
										color='gray.700'
										_dark={{
											color: 'gray.50',
										}}
									>
										Password
									</FormLabel>

									<Input
										type='password'
										value={input.pass}
										onChange={handleChange}
										mt={1}
										name='pass'
										shadow='sm'
										size='sm'
										w='full'
										rounded='md'
									/>
									{!errors.pass ? (
										<FormHelperText></FormHelperText>
									) : (
										<FormErrorMessage>Password is required.</FormErrorMessage>
									)}
								</FormControl>

								<Stack spacing={10}>
									<Button
										bg={'blue.400'}
										color={'white'}
										type='submit'
										_hover={{
											bg: 'blue.500',
										}}
									>
										Sign in
									</Button>
								</Stack>
							</chakra.form>
						</Stack>
					</Box>
					<Center>
						<Stack spacing={2}>
							<Text fontWeight={'extrabold'} fontSize={'md'} color={'gray.700'}>
								{datos.name}
							</Text>
							<Text fontWeight={'bold'} fontSize={'md'} color={'gray.700'}>
								{datos.email}
							</Text>
							<Text fontWeight={'medium'} fontSize={'md'} color={'gray.700'}>
								{datos.pass}
							</Text>
						</Stack>
					</Center>
					;
				</Stack>
			</Flex>
		</div>
	);
}

export default Form;
