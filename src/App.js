import React, { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    text: "State which amongst the following is NOT an advantage of distributed systems?",
    options: [
      "Resource sharing",
      "Incremental growth",
      "Reliability",
      "Process to process communication",
    ],
    answer: "Process to process communication",
  },
  {
    id: 2,
    text: "Identify the following options if one site fails in a distributed system:",
    options: [
      "The remaining sites can continue operating",
      "Directly connected sites will stop working",
      "All the sites will stop working",
      "A part of sites will be working",
    ],
    answer: "All the sites will stop working",
  },
  {
    id: 3,
    text: "Identify the option below: Resources and clients transparency that allows movement within a system is called",
    options: [
      "Mobility transparency",
      "Concurrency transparency",
      "Replication transparency",
      "Performance transparency",
    ],
    answer: "Mobility transparency",
  },
  {
    id: 4,
    text: "Select the option that distributed systems:",
    options: [
      "High security",
      "Better resource sharing",
      "Better system utilization",
      "Low system overhead",
    ],
    answer: "High security",
  },
  {
    id: 5,
    text: "Select what is NOT true about distributed systems:",
    options: [
      "It is a collection of processors",
      "All processors are synchronized",
      "They do not share memory",
      "Process to process communication",
    ],
    answer: "All processors are synchronized",
  },
  {
    id: 6,
    text: "Select which is NOT a characteristic of a distributed system:",
    options: ["Heterogeneity", "Openness", "Scalability", "Global clock"],
    answer: "Global clock",
  },
  {
    id: 7,
    text: "Select what is NOT a major reason for building distributed systems?",
    options: [
      "Resource sharing",
      "Computation speedup",
      "Reliability",
      "Simplicity",
    ],
    answer: "Simplicity",
  },
  {
    id: 8,
    text: "Select which is NOT a design issue in distributed system structure:",
    options: [
      "Scalability",
      "Fault-tolerance",
      "Flexibility",
      "Non-scalability",
    ],
    answer: "Non-scalability",
  },
  {
    id: 9,
    text: "Select which is NOT an advantage of distributed systems over independent PCs:",
    options: [
      "Data sharing",
      "Resource sharing",
      "Communication",
      "Communication, no resource sharing",
    ],
    answer: "Communication, no resource sharing",
  },
  {
    id: 10,
    text: "Identify in a distributed system, each processor has its own:",
    options: [
      "Local memory",
      "Clock",
      "Both local memory and clock",
      "Only cache",
    ],
    answer: "Both local memory and clock",
  },
  {
    id: 11,
    text: "Identify if timestamps of two events are the same, then the events are ___________________",
    options: [
      "Process synchronization",
      "Communication synchronization",
      "Deadlock problem",
      "Power failure",
    ],
    answer: "Concurrent",
  },
  {
    id: 12,
    text: "Identify if timestamps of concurrent two events are the same, then the events are:",
    options: ["Concurrent", "Non-concurrent", "Monotonic", "Non-monotonic"],
    answer: "Non-concurrent",
  },
  {
    id: 13,
    text: 'Justify the correct statement: "If a process is executing in its critical section, ____________________"',
    options: [
      "Any other process can also execute in its critical section",
      "No other process can execute in its critical section",
      "One more process can execute in its critical section",
      "All processes execute",
    ],
    answer: "No other process can execute in its critical section",
  },
  {
    id: 14,
    text: 'Justify the correct statement: "In the token passing approach of distributed systems, processes are organized in a ring structure _______________"',
    options: [
      "Logically",
      "Physically",
      "Both logically and physically",
      "Independently",
    ],
    answer: "Logically",
  },
  {
    id: 15,
    text: "Identify which site an election message is always sent to in a distributed system:",
    options: [
      "Lower numbers",
      "Waiting processes",
      "Requesting lower number of resource",
      "Higher numbers",
    ],
    answer: "Higher numbers",
  },
  {
    id: 16,
    text: "Select the algorithms which are NOT used to handle mutual exclusion in distributed systems:",
    options: ["Centralized", "Token ring", "Distributed", "Non-centralized"],
    answer: "Distributed",
  },
  {
    id: 17,
    text: "Justify what logical clock measures:",
    options: [
      "Day time",
      "Night time",
      "Relationship among events",
      "Only event time",
    ],
    answer: "Relationship among events",
  },
  {
    id: 18,
    text: "Identify when resources have multiple instances, ________ can be applied for deadlock avoidance.",
    options: [
      "Bankers algorithm",
      "Resource allocation graph",
      "Semaphores",
      "Dinning philosopher",
    ],
    answer: "Bankers algorithm",
  },
  {
    id: 19,
    text: "Select which algorithm, one process is elected as the coordinator.",
    options: [
      "Distributed mutual exclusion algorithm",
      "Centralized mutual exclusion algorithm",
      "Token ring algorithm",
      "Leaky bucket algorithm",
    ],
    answer: "Centralized mutual exclusion algorithm",
  },
  {
    id: 20,
    text: "Apply the logic to select which principle states that programs, users, and even the systems be given just enough privileges to perform their task?",
    options: [
      "Principle of operating system",
      "Principle of least privilege",
      "Principle of process scheduling",
      "Principle of non-process scheduling",
    ],
    answer: "Principle of least privilege",
  },
  {
    id: 21,
    text: "Select the option where the Bankers algorithm is applied __________",
    options: [
      "To prevent deadlock",
      "To rectify deadlock",
      "To detect deadlock",
      "To solve deadlock",
    ],
    answer: "To prevent deadlock",
  },
  {
    id: 22,
    text: "Identify for system protection, a process should access _____________",
    options: [
      "All the resources",
      "Only those resources for which it has authorization",
      "Few resources but authorization is not required",
      "Only a few resources",
    ],
    answer: "Only those resources for which it has authorization",
  },
  {
    id: 23,
    text: "Choose the option from below the following. In a web-based computing system, the computers used are normally _____?",
    options: ["Servers", "Tablets", "Personal computers", "Network computers"],
    answer: "Servers",
  },
  {
    id: 24,
    text: "Choose one of the best options from the following. The dump of memory of the computer system is examined by the ___?",
    options: ["Programmer", "Debugger", "Designer", "Engineer"],
    answer: "Debugger",
  },
  {
    id: 25,
    text: "Choose which is a friendly user interface provided by the operating system __________",
    options: [
      "Graphical user interface",
      "Command-line interface",
      "Batch interface",
      "Device interface",
    ],
    answer: "Graphical user interface",
  },
  {
    id: 26,
    text: "Select the below option that microkernel has the responsibility for mapping each virtual _______",
    options: ["Module", "I/O devices", "Memory", "Page"],
    answer: "Module",
  },
  {
    id: 27,
    text: "Choose one of the best options from the following. In a distributed system, information is exchanged through _______",
    options: ["Memory sharing", "Message passing", "Token passing", "Cache"],
    answer: "Message passing",
  },
  {
    id: 28,
    text: "Identify the below option from the following. RPC (Remote Procedure Call) is correlated with the __________",
    options: ["Servers", "Switch", "Hub", "Gateway"],
    answer: "Servers",
  },
  {
    id: 29,
    text: "Select the ___________ layer, which provides the interface that client and server application objects use to interact with each other.",
    options: ["Increasing", "Count", "Bit", "Stub/skeleton"],
    answer: "Stub/skeleton",
  },
  {
    id: 30,
    text: "Select which is not an application of the client and server model ___________",
    options: [
      "World Wide Web",
      "Network printing",
      "Email",
      "Switching of process",
    ],
    answer: "Switching of process",
  },
  {
    id: 31,
    text: "Select that ______________ provides programmers a familiar programming model by extending the local procedure call to a distributed environment.",
    options: [
      "Distributed environment",
      "Permanent procedure call",
      "Process and file",
      "Remote procedure call",
    ],
    answer: "Remote procedure call",
  },
  {
    id: 32,
    text: "Select the option below that an architecture where clients first communicate with the server for data, then format and display it to the users, is known as ___________",
    options: [
      "Client/server architecture",
      "Three-tier architecture",
      "Two-tier architecture",
      "Peer-to-peer architecture",
    ],
    answer: "Three-tier architecture",
  },
  {
    id: 33,
    text: "Select the full form of NTP:",
    options: [
      "Network Time Protocol",
      "New Time Protocol",
      "New Timestamp Protocol",
      "Network Timestamp Protocol",
    ],
    answer: "Network Time Protocol",
  },
  {
    id: 47,
    text: "Evaluate which event is concurrent with the vector clock (2, 8, 4)?",
    options: ["(3,9,5)", "(3,8,4)", "(1,7,3)", "(4,8,2)"],
    answer: "(3,8,4)",
  },
  {
    id: 48,
    text: "Select which is not a feature of cooperative algorithm",
    options: [
      "Complex",
      "Larger overhead",
      "Worst stability",
      "Better stability",
    ],
    answer: "Complex",
  },
  {
    id: 49,
    text: "Select in casual consistency model all processes apply shared accesses in",
    options: [
      "Random order",
      "Same order",
      "Sequential order",
      "Specific order",
    ],
    answer: "Specific order",
  },
  {
    id: 50,
    text: "Select in which of the following consistency model all writes become perceptible to all processes",
    options: ["Strict", "Weak", "Casual", "Sequential"],
    answer: "Sequential",
  },
  {
    id: 51,
    text: 'Analyze properly and complete the statement: "Remote write protocol supports all write operations ______________"',
    options: [
      "Need to be forwarded to local server",
      "Need to be forwarded to multiple servers",
      "Need to be forwarded to any server",
      "Need to be forwarded to a fixed single server",
    ],
    answer: "Need to be forwarded to any server",
  },
  {
    id: 52,
    text: "State transition failures happen when",
    options: [
      "Server fails",
      "Server reacts unexpectedly",
      "Client fails",
      "Network fails",
    ],
    answer: "Server reacts unexpectedly",
  },
  {
    id: 53,
    text: "Choose which is not applicable in distributed file system.",
    options: [
      "File replication",
      "Migration",
      "Client interface",
      "Remote access",
    ],
    answer: "Client interface",
  },
  {
    id: 54,
    text: "Select the option below that in a distributed file system, _______ is comparing and mapping between logical and physical objects.",
    options: ["Client interfacing", "Naming", "Migration", "Heterogeneity"],
    answer: "Naming",
  },
  {
    id: 55,
    text: "Select the option below that the kernel mode of an operating system is also defined as",
    options: [
      "User mode",
      "System mode",
      "Supervisor mode",
      "Non-supervising mode",
    ],
    answer: "Supervisor mode",
  },
  {
    id: 56,
    text: "Choose the option that microkernel lends itself to",
    options: ["Computers", "Systems", "Distributed systems", "Applications"],
    answer: "Distributed systems",
  },
  {
    id: 57,
    text: "Choose the option that the microkernel expresses the supports of",
    options: ["Flexibility", "Reliability", "Accessibility", "Rigidity"],
    answer: "Flexibility",
  },
  {
    id: 58,
    text: "Choose the option that thread processor affinity is associated with a set of",
    options: ["Processes", "Processors", "Programs", "Applications"],
    answer: "Processors",
  },
  {
    id: 59,
    text: "Choose the option that in UNIX, a thread is",
    options: ["Runnable", "Executing", "Updated", "Accessed"],
    answer: "Runnable",
  },
  {
    id: 60,
    text: "Choose the option that a microkernel architecture can be considered well in the context of an",
    options: [
      "Object-oriented operating system",
      "Internal device",
      "Interface",
      "Attractive feature",
    ],
    answer: "Object-oriented operating system",
  },
  {
    id: 61,
    text: "Select with a microkernel architecture, it is possible to handle hardware interrupts as",
    options: ["Applications", "Information", "Data", "Messages"],
    answer: "Applications",
  },
  {
    id: 62,
    text: "Choose the Java feature which is used to invoke a method on a remote object?",
    options: [
      "Process Control Block (PCB)",
      "Remote Method Invocation (RMI)",
      "Remote Access Control Block",
      "Resource Allocation Graph",
    ],
    answer: "Remote Method Invocation (RMI)",
  },
  {
    id: 63,
    text: "Select if the master and transaction file have keys in the same order, then it takes",
    options: ["Less time", "More time", "Many hours", "Many days"],
    answer: "Less time",
  },
  {
    id: 64,
    text: "Choose the fastest form of inter-process communication provided in UNIX is decided as",
    options: ["Virtual memory", "Memory", "Shared memory", "Main memory"],
    answer: "Shared memory",
  },
  {
    id: 65,
    text: "Choose the option that processes on remote systems are identified by",
    options: [
      "Host ID",
      "Host name and identifier",
      "Identifier",
      "Process ID",
    ],
    answer: "Process ID",
  },
  {
    id: 66,
    text: "Select the option that the capability of a system to adapt to increased service load is observed as",
    options: ["Scalability", "Tolerance", "Capacity", "Openness"],
    answer: "Scalability",
  },
  {
    id: 67,
    text: "Analyze which is not a major reason for building distributed systems",
    options: [
      "Resource sharing",
      "Computation speedup",
      "Reliability",
      "Simplicity",
    ],
    answer: "Simplicity",
  },
  {
    id: 68,
    text: "Identify connection strategies that are not used in distributed systems",
    options: [
      "Circuit switching",
      "Message switching",
      "Token switching",
      "Packet switching",
    ],
    answer: "Token switching",
  },
  {
    id: 69,
    text: "Identify the common problem found in distributed systems",
    options: [
      "Process synchronization",
      "Communication synchronization",
      "Deadlock problem",
      "Power failure",
    ],
    answer: "Deadlock problem",
  },
  {
    id: 70,
    text: "Select the option below that the size of the monolithic kernel is expressed as .......... than that of a microkernel",
    options: ["Larger", "Smaller", "Medium", "None of these"],
    answer: "Larger",
  },
  {
    id: 71,
    text: "Give an example of a monolithic kernel-based operating system",
    options: ["UNIX", "Linux", "Both UNIX and Linux", "None of these"],
    answer: "Both UNIX and Linux",
  },
  {
    id: 72,
    text: "Give an example of a microkernel-based operating system",
    options: ["Mach", "L4", "Both Mach and L4", "None of these"],
    answer: "Both Mach and L4",
  },
  {
    id: 73,
    text: "Choose the option below that the message passing concept can be assembled in",
    options: [
      "Monolithic kernel",
      "Microkernel",
      "Both monolithic kernel and microkernel",
      "None of these",
    ],
    answer: "Microkernel",
  },
  {
    id: 74,
    text: "Select the option below that the slower execution concept can be developed within",
    options: [
      "Microkernel",
      "Monolithic kernel",
      "Both monolithic kernel and microkernel",
      "None of these",
    ],
    answer: "Monolithic kernel",
  },
  {
    id: 75,
    text: 'Analyze to choose the correct "It is easier to .............. the system if it is done in the form of layers."',
    options: ["Create", "Maintain", "Update", "All of these"],
    answer: "All of these",
  },
  {
    id: 76,
    text: "Select the option below that the highest layer of the layered operating system is identified as",
    options: ["I/O buffer", "User programs", "CPU scheduling", "None of these"],
    answer: "I/O buffer",
  },
  {
    id: 77,
    text: "Select requested resources that are granted with deadlock detection",
    options: ["Resources", "Processes", "Programs", "Data"],
    answer: "Resources",
  },
  {
    id: 78,
    text: "Choose the application for which thread management work is done by a pure kernel-level thread facility?",
    options: ["Kernel", "Program", "Application", "Information"],
    answer: "Kernel",
  },
  {
    id: 79,
    text: "Give an example of a virtual machine",
    options: [
      "DOS virtual machine",
      "Virtual machine",
      "Java virtual machine",
      "None of these",
    ],
    answer: "Java virtual machine",
  },
  {
    id: 80,
    text: "Choose the option below when an attempt is made to make a machine or network resource unavailable to its intended users, the attack is called",
    options: [
      "Denial-of-service attack",
      "Slow read attack",
      "Spoofed attack",
      "Starvation attack",
    ],
    answer: "Denial-of-service attack",
  },
  {
    id: 81,
    text: "Choose the option below that a file type can be recognized by",
    options: [
      "File name",
      "File extension",
      "File identifier",
      "None of these",
    ],
    answer: "File extension",
  },
  {
    id: 82,
    text: "Select the following one that is not the correct benefit of distributed computing",
    options: ["Resource sharing", "Performance", "Availability", "Security"],
    answer: "Security",
  },
  {
    id: 83,
    text: 'Analyze to fill up the with the correct word, "Internet provides _______ for remote login"',
    options: ["Telnet", "HTTP", "FTP", "RPC"],
    answer: "Telnet",
  },
  {
    id: 84,
    text: "Choose the option below that in distributed systems, link and site failure is detected by applying ___________",
    options: ["Polling", "Handshaking", "Token passing", "None of these"],
    answer: "Handshaking",
  },
  {
    id: 85,
    text: "Choose the option below that a network operating system is simulated on",
    options: [
      "Server",
      "Every system in the network",
      "Both server and every system in the network",
      "None of these",
    ],
    answer: "Both server and every system in the network",
  },
  {
    id: 86,
    text: "Choose the option below that ____ is a software architecture used to build a distributed system from a network connected by a high-speed network.",
    options: ["DOS", "NOS", "Middleware", "Operating system"],
    answer: "Middleware",
  },
  {
    id: 87,
    text: "Choose the following options in a distributed file system, when a file’s physical storage location changes",
    options: [
      "File name needs to be changed",
      "File name need not to be changed",
      "File’s host name needs to be changed",
      "File’s local name needs to be changed",
    ],
    answer: "File name needs to be changed",
  },
];

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: option,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let totalScore = 0;
    for (const question of questions) {
      if (selectedOptions[question.id] === question.answer) {
        totalScore += 5;
      }
    }
    setScore(totalScore);
    setShowPopup(true);
  };

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false);
      }, 660000);
    }
    return () => clearTimeout(timeout);
  }, [showPopup]);

  return (
    <div className="app">
      <h1 className="app-title">Distributed System MCQ</h1>
      <form className="quiz-form">
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p className="question-text">{question.text}</p>
            <div className="options">
              {question.options.map((option) => (
                <label key={option} className="option">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <p className="popup-content">
            Your score: {score} out of {questions.length * 5}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
