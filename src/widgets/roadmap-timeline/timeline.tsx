import {Text, Box, Heading, List, ListItem, Link} from '@chakra-ui/react'
import './timeline.scss'

export default function CreateTimeline(){
	return(
		<Box width='100%' height='auto' p='50px 0' backgroundColor='rgb(245,245,245)' display='grid' justifyItems='center' borderRadius='15px'>
			<Text fontSize={['2rem','3rem','4rem']} marginBottom='80px' className='roadmap-timeline-header' fontWeight='bold' color='rgb(106,6,236)' position='relative'>
				Roadmap
			</Text>
			<Box className='box-container' w='70%' h='auto' position='relative'>
				<List  color='black'>
					<ListItem className='roadmap-timeline-list-item'>
						<Heading>The first beta test</Heading>
						<Text>Beta testing is planned to be conducted in Europe. Participants who will be able to test our platform before anyone else will be selected for beta testing</Text>
						<Link href='#'>Read more</Link>
						<span className='roadmap-timeline-span-circle'></span>
						<span className='roadmap-timeline-span-date'>Q1 2024</span>
					</ListItem>
					<ListItem className='roadmap-timeline-list-item'>
						<Heading>Ecosystem expansion</Heading>
						<Text>During this period, we will actively develop our product, as well as make collaborations with other well-known projects</Text>
						<Link href='#'>Read more</Link>
						<span className='roadmap-timeline-span-circle'></span>
						<span className='roadmap-timeline-span-date'>Q2 - Q4 2024</span>
					</ListItem>
					<ListItem className='roadmap-timeline-list-item'>
						<Heading>Come to... Mainnet !</Heading>
						<Text>At this stage, we will launch the main network, as well as reward early participants...</Text>
						<Link href='#'>Read more</Link>
						<span className='roadmap-timeline-span-circle'></span>
						<span className='roadmap-timeline-span-date'>Q1 2025</span>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}