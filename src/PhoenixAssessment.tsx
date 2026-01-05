import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Download } from 'lucide-react';

const PhoenixAssessment = () => {
  const [expanded, setExpanded] = useState({});
  const [responses, setResponses] = useState({});

  const categories = [
    {
      id: 'systems-thinking',
      title: 'The First Way: Systems Thinking',
      questions: [
        { id: 'q1', text: 'We optimize for overall system flow rather than individual team efficiency' },
        { id: 'q2', text: 'We actively identify and manage bottlenecks in our workflow' },
        { id: 'q3', text: 'Work flows smoothly between teams without excessive handoff delays' },
        { id: 'q4', text: 'We measure end-to-end cycle time from request to customer value delivery' },
        { id: 'q5', text: 'Teams collaborate across silos rather than working in isolation' },
        { id: 'q6', text: 'We limit work-in-process to maintain flow and focus' }
      ]
    },
    {
      id: 'feedback-loops',
      title: 'The Second Way: Amplify Feedback Loops',
      questions: [
        { id: 'q7', text: 'We have comprehensive monitoring and observability in production' },
        { id: 'q8', text: 'Problems are detected quickly (minutes/hours, not days/weeks)' },
        { id: 'q9', text: 'Operations feedback reaches development teams rapidly' },
        { id: 'q10', text: 'We conduct blameless post-mortems after incidents' },
        { id: 'q11', text: 'Development teams are involved in on-call rotations' },
        { id: 'q12', text: 'We have automated testing that provides fast feedback on code quality' }
      ]
    },
    {
      id: 'experimentation',
      title: 'The Third Way: Culture of Experimentation',
      questions: [
        { id: 'q13', text: 'Teams are encouraged to experiment and take calculated risks' },
        { id: 'q14', text: 'Failures are treated as learning opportunities, not reasons for blame' },
        { id: 'q15', text: 'We allocate dedicated time for improvement and innovation work' },
        { id: 'q16', text: 'We practice and rehearse critical procedures regularly' },
        { id: 'q17', text: 'Knowledge sharing is actively encouraged and facilitated' },
        { id: 'q18', text: 'Teams have autonomy to improve their own processes' }
      ]
    },
    {
      id: 'work-types',
      title: 'The Four Types of Work',
      questions: [
        { id: 'q19', text: 'We categorize and track different types of work separately' },
        { id: 'q20', text: 'Unplanned work (firefighting) is measured and actively reduced' },
        { id: 'q21', text: 'We have a formal change management process' },
        { id: 'q22', text: 'Business projects are prioritized based on value and capacity' },
        { id: 'q23', text: 'We invest in preventive work to reduce future unplanned work' },
        { id: 'q24', text: 'Technical debt is tracked and systematically addressed' }
      ]
    },
    {
      id: 'constraints',
      title: 'Managing Constraints & Bottlenecks',
      questions: [
        { id: 'q25', text: 'We have identified our primary constraint/bottleneck' },
        { id: 'q26', text: 'The constraint is protected from non-essential work' },
        { id: 'q27', text: 'Work is actively subordinated to the constraint' },
        { id: 'q28', text: 'We regularly reassess where our constraint is as the system evolves' },
        { id: 'q29', text: 'Resources are strategically allocated to elevate the constraint' }
      ]
    },
    {
      id: 'visibility',
      title: 'Work Visibility & Flow',
      questions: [
        { id: 'q30', text: 'All work is visible on shared boards or systems' },
        { id: 'q31', text: 'Anyone can see the status of work at any time' },
        { id: 'q32', text: 'We use visual management tools (kanban, dashboards, etc.)' },
        { id: 'q33', text: 'Work queues are clearly defined and managed' },
        { id: 'q34', text: 'We can quickly identify blocked or stalled work' },
        { id: 'q35', text: 'Lead times and cycle times are tracked and visible' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps Integration',
      questions: [
        { id: 'q36', text: 'Development and operations work closely together' },
        { id: 'q37', text: 'Operations requirements are considered from the start of projects' },
        { id: 'q38', text: 'Security is integrated into the development process (DevSecOps)' },
        { id: 'q39', text: 'We have automated deployment pipelines' },
        { id: 'q40', text: 'Infrastructure is managed as code' },
        { id: 'q41', text: 'Deployments are routine, low-risk events' }
      ]
    },
    {
      id: 'culture',
      title: 'Cultural Transformation',
      questions: [
        { id: 'q42', text: 'We have a blameless culture focused on learning' },
        { id: 'q43', text: 'Improvement work is treated as seriously as feature work' },
        { id: 'q44', text: 'Teams are empowered to make decisions' },
        { id: 'q45', text: 'We measure outcomes rather than just activity or utilization' },
        { id: 'q46', text: 'Cross-functional collaboration is the norm' },
        { id: 'q47', text: 'Leadership supports and models desired cultural behaviors' }
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Repeatability',
      questions: [
        { id: 'q48', text: 'Repetitive tasks are automated wherever possible' },
        { id: 'q49', text: 'Deployments are fully or mostly automated' },
        { id: 'q50', text: 'Testing is automated and runs continuously' },
        { id: 'q51', text: 'Environment provisioning is automated and consistent' },
        { id: 'q52', text: 'We automate detection and response to common issues' }
      ]
    },
    {
      id: 'business-alignment',
      title: 'Business Alignment',
      questions: [
        { id: 'q53', text: 'IT leadership participates in strategic business planning' },
        { id: 'q54', text: 'We understand how our work contributes to business objectives' },
        { id: 'q55', text: 'Business stakeholders understand IT capabilities and constraints' },
        { id: 'q56', text: 'We measure IT performance in terms of business value delivered' },
        { id: 'q57', text: 'Technology is viewed as a competitive advantage, not just a cost' }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setExpanded(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateCategoryScore = (category) => {
    const categoryResponses = category.questions
      .map(q => responses[q.id])
      .filter(r => r !== undefined);
    
    if (categoryResponses.length === 0) return null;
    
    const sum = categoryResponses.reduce((acc, val) => (acc as any) + (val as any), 0);
    return ((sum / (categoryResponses.length * 5)) * 100).toFixed(0);
  };

  const calculateOverallScore = () => {
    const allResponses = Object.values(responses).filter(r => r !== undefined);
    if (allResponses.length === 0) return null;
    
    const sum = allResponses.reduce((acc, val) => (acc as any) + (val as any), 0);
    return (((sum as any) / (allResponses.length * 5)) * 100).toFixed(0);
  };

  const getTotalAnswered = () => {
    return Object.keys(responses).length;
  };

  const getTotalQuestions = () => {
    return categories.reduce((sum, cat) => sum + cat.questions.length, 0);
  };

  const getScoreColor = (score) => {
    if (score === null) return 'text-gray-500';
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const exportResults = () => {
    const results = {
      date: new Date().toISOString(),
      overallScore: calculateOverallScore(),
      categories: categories.map(cat => ({
        title: cat.title,
        score: calculateCategoryScore(cat),
        questions: cat.questions.map(q => ({
          question: q.text,
          response: responses[q.id] || 'Not answered'
        }))
      }))
    };
    
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `phoenix-assessment-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const overallScore = calculateOverallScore();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Phoenix Project Team Assessment
        </h1>
        <p className="text-gray-600 mb-4">
          Rate each statement from 1 (Strongly Disagree) to 5 (Strongly Agree) based on your team's current state.
        </p>
        
        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
          <div>
            <div className="text-sm text-gray-600">Progress</div>
            <div className="text-lg font-semibold text-gray-900">
              {getTotalAnswered()} of {getTotalQuestions()} questions answered
            </div>
          </div>
          {overallScore !== null && (
            <div className="text-right">
              <div className="text-sm text-gray-600">Overall Score</div>
              <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
                {overallScore}%
              </div>
            </div>
          )}
          <button
            onClick={exportResults}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {categories.map((category) => {
        const isExpanded = expanded[category.id];
        const score = calculateCategoryScore(category);
        
        return (
          <div key={category.id} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              </div>
              {score !== null && (
                <span className={`text-lg font-bold ${getScoreColor(score)}`}>
                  {score}%
                </span>
              )}
            </button>
            
            {isExpanded && (
              <div className="px-6 pb-6">
                {category.questions.map((question) => (
                  <div key={question.id} className="mb-6 last:mb-0">
                    <p className="text-gray-700 mb-3">{question.text}</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          onClick={() => handleResponse(question.id, value)}
                          className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all ${
                            responses[question.id] === value
                              ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
                      <span>Strongly Disagree</span>
                      <span>Strongly Agree</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Scoring Guide</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-green-600">80-100%:</span>
            <span className="text-gray-700">Excellent - Strong Phoenix Project principles in practice</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-yellow-600">60-79%:</span>
            <span className="text-gray-700">Good - Solid foundation with room for improvement</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-600">40-59%:</span>
            <span className="text-gray-700">Developing - Significant opportunities for growth</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-red-600">0-39%:</span>
            <span className="text-gray-700">Needs Attention - Priority focus areas identified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoenixAssessment;