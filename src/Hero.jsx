import heroImage from './assets/hero.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>contentful CMS</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
						atque autem odit vero nam dicta corrupti minima animi quae, dolorum
						aperiam, modi debitis tenetur architecto molestiae. Quae sit iusto
						possimus!
					</p>
				</div>
				<div className='img-container'>
					<img src={heroImage} alt='woman and the browser' />
				</div>
			</div>
		</section>
	);
};
export default Hero;
