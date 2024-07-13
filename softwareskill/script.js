document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
    const circleRadius = 200;
    const speed = 0.01;
    let animationId;
    let isHovered = false;

    // Apply the 'loaded' class to fade in elements
    document.body.classList.add('loaded');

    skills.forEach((skill, index) => {
        skill.angle = index * (2 * Math.PI / skills.length);

        skill.addEventListener('mouseenter', () => {
            isHovered = true;
            cancelAnimationFrame(animationId);
            skill.querySelector('i').style.color = skill.querySelector('i').getAttribute('data-color');
        });

        skill.addEventListener('mouseleave', () => {
            isHovered = false;
            skill.querySelector('i').style.color = '#ffffff';
            animate();
        });
    });

    function animate() {
        if (!isHovered) {
            skills.forEach(skill => {
                const x = circleRadius * Math.cos(skill.angle);
                const y = circleRadius * Math.sin(skill.angle);

                skill.style.left = `${circleRadius + x}px`;
                skill.style.top = `${circleRadius + y}px`;

                skill.angle += speed;
            });
        }

        animationId = requestAnimationFrame(animate);
    }

    animate();
});
