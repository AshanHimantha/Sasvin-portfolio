const ProjectCard = ({ image, title, category }) => {
  return (
    <div className="w-full md:w-[48%] mb-12">
      <div className="border border-gray-200 rounded-lg aspect-[5/3] overflow-hidden">
        <img
          src={image}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover transition-transform hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-4">
        <p style={{ fontSize: '32px' }} className="font-medium ">{title}</p> {/* Changed font size */}
        <div className="flex flex-col items-end mt-1">
          <p className="text-[10.5px] md:text-sm text-gray-600">{category}</p>
          <p className="text-xl -mt-2">→</p>
        </div>
       
      </div>
      <hr className="w-full mt-2 text-[#6A6A6A]"/>
    </div>
  );
};

export default ProjectCard;