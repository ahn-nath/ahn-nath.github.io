import TabContentSection from "./TabContentSection";

const ArchitectureDesignSection = ({ tabsData = [] }) => {

  return (
    <section>
      {tabsData.length !== 0 &&
      <div className="container mt-5 bg-light p-4 rounded shadow-sm">
        {/* Tabs */}
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {tabsData.map((tab, index) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button 
                className={`nav-link accent-color ${index === 0 ? 'active' : ''}`}
                id={`${tab.id}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={index === 0 ? 'true' : 'false'}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="tab-content p-4 bg-white border border-top-0 rounded-bottom" id="myTabContent">

          {tabsData.map((tab, index) => (
            <div 
              className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              key={tab.id}
            >
              <TabContentSection 
                title={tab.title}
                texts={tab.texts}
                highlight={tab.highlight}
                isActive={index === 0}
                image={tab.image}
              />
            </div>
          ))}
        </div>
      </div>
      }
    </section>
  );
};

export default ArchitectureDesignSection;
