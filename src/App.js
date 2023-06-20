import React, { useState, useEffect } from "react";
import "./App.css";

const questions = [
  {
    id: 1,
    text: "Data mining is the process of finding __________, novel, useful, and actionable patterns in large volumes of data. Which of the following terms best fills the gap above?",
    options: ["A. voluminous", "B. heterogeneous", "C. valid", "D. noisy"],
    answer: "C. valid",
  },
  {
    id: 2,
    text: "The earliest step in the data mining process is usually?",
    options: [
      "A. Visualization",
      "B. Preprocessing",
      "C. Modeling",
      "D. Deployment",
    ],
    answer: "B. Preprocessing",
  },
  {
    id: 3,
    text: "Name of a person can be considered as an attribute of type?",
    options: ["A. Nominal", "B. Ordinal"],
    answer: "A. Nominal",
  },
  {
    id: 4,
    text: "Height of a person can be considered as an attribute of type?",
    options: ["A. Nominal", "B. Ordinal", "C. Interval", "D. Ratio"],
    answer: "D. Ratio",
  },
  {
    id: 5,
    text: "Which of the following operations can be performed on nominal attributes?",
    options: [
      "A. Distinctness",
      "B. Order",
      "C. Addition",
      "D. Multiplication",
    ],
    answer: "A. Distinctness",
  },
  {
    id: 6,
    text: "Which of the following operations can be performed on ordinal attributes?",
    options: [
      "A. Distinctness",
      "B. Order",
      "C. Both of the above",
      "D. None of the above",
    ],
    answer: "C. Both of the above",
  },
  {
    id: 7,
    text: "Friendship structure of users in a social networking site can be considered as an example of:",
    options: [
      "A. Record data",
      "B. Ordered data",
      "C. Graph data",
      "D. None of the above",
    ],
    answer: "C. Graph data",
  },
  {
    id: 8,
    text: "Columns of a data matrix storing record data usually represent:",
    options: ["A. Metadata", "B. Objects", "C. Attributes", "D. Aggregates"],
    answer: "C. Attributes",
  },
  {
    id: 9,
    text: "An outlier is a:",
    options: [
      "A. description of records in the data",
      "B. data point which is considerably different from other data points",
      "C. record with missing attributes",
      "D. duplicate record",
    ],
    answer:
      "B. data point which is considerably different from other data points",
  },
  {
    id: 10,
    text: "If dimensionality reduction is performed on a record data matrix, the transformed data matrix:",
    options: [
      "A. has reduced number of rows",
      "B. has reduced number of columns",
      "C. has reduced number of both rows and columns",
      "D. has same number of rows and columns",
    ],
    answer: "B. has reduced number of columns",
  },
  {
    id: 11,
    text: "If sampling is performed on a record data matrix, the transformed data matrix:",
    options: [
      "A. has reduced number of rows",
      "B. has reduced number of columns",
      "C. has reduced number of both rows and columns",
      "D. has same number of rows and columns",
    ],
    answer: "A. has reduced number of rows",
  },
  {
    id: 12,
    text: "Principal component analysis is a technique for performing:",
    options: [
      "A. sampling",
      "B. discretization",
      "C. dimensionality reduction",
      "D. aggregation",
    ],
    answer: "C. dimensionality reduction",
  },
  {
    id: 13,
    text: "Association Rules\nIf a store has N items, the number of possible itemsets is:",
    options: ["A. 2N-1", "B. 2N − 1", "C. N/2", "D. N-1"],
    answer: "B. 2N − 1",
  },
  {
    id: 14,
    text: "An association rule is valid if it satisfies:",
    options: [
      "A. Support criteria",
      "B. Confidence criteria",
      "C. Both support and confidence criteria",
      "D. None of the above",
    ],
    answer: "C. Both support and confidence criteria",
  },
  {
    id: 15,
    text: "A frequent itemset is one which satisfies the:",
    options: ["A. Support criteria", "B. Confidence criteria"],
    answer: "A. Support criteria",
  },
  {
    id: 16,
    text: "The apriori algorithm exploits the:",
    options: [
      "A. Positive definiteness property of support",
      "B. Positive semidefiniteness property of support",
      "C. Monotone property of support",
      "D. Anti Monotone property of support",
    ],
    answer: "D. Anti Monotone property of support",
  },
  {
    id: 17,
    text: "Consider three itemsets:I1={milk, sugar, bread} I2={milk, sugar} I3={milk} Which of the following statements are correct?",
    options: [
      "A. support(I1) > support(I2)",
      "B. support(I2) > support(I3)",
      "C. both statements A and B",
      "D. none of the statements A and B",
    ],
    answer: "D. none of the statements A and B",
  },
  {
    id: 18,
    text: "For questions 6-10, consider the following small database of four transactions.\nThe minimum support is 60% and the minimum confidence is 80%.\nTrans_id Itemlist\nT1 {F, A, D, B}\nT2 {D, A, C, E, B}\nT3 {C, A, B, E}\nT4 {B, A, D}\nThe 1-itemsets that satisfy the support criteria are:",
    options: [
      "A. {A}, {B}, {C}, {D}",
      "B. {A}, {B}, {C}",
      "C. {A}, {B}",
      "D. None of the above",
    ],
    answer: "C. {A}, {B}",
  },
  {
    id: 19,
    text: "The 2-itemsets that satisfy the support criteria are:",
    options: [
      "A. {BC}, {BE}, {CE}, {AE}",
      "B. {AB}, {BD}, {AD}",
      "C. {AE}, {BC}",
      "D. {BC}",
    ],
    answer: "B. {AB}, {BD}, {AD}",
  },
  {
    id: 20,
    text: "The 3-itemsets that satisfy the support criteria are:",
    options: [
      "A. {ABC}, {ABE}, {BCD}, {ACD}",
      "B. {ABE}, {BCD}, {ACD}",
      "C. {ABE}, {BCD}",
      "D. {ABD}",
    ],
    answer: "D. {ABD}",
  },
  {
    id: 21,
    text: "Which of the following is NOT a valid association rule?",
    options: ["A. A -> B", "B. B -> A", "C. A -> D", "D. D -> A"],
    answer: "C. A -> D",
  },
  {
    id: 22,
    text: "Which of the following is NOT a valid association rule?",
    options: ["A. A -> DB", "B. D -> AB", "C. AD -> B", "D. DB -> A"],
    answer: "A. A -> DB",
  },
  {
    id: 23,
    text: "How does the Apriori Algorithm work to mine frequent itemsets and learn association rule over databases?",
    options: [
      "A. The algorithm sorts the items into pairs or triplets and eliminates all but itemsets that appear together the least.",
      "B. The algorithm reduces the number of items being considered by eliminating all itemsets whose support count is less than the minimum support count.",
      'C. The algorithm orders the items in alphabetical order and then picks the itemset that starts with "A" or is closest to the beginning of the alphabet.',
    ],
    answer:
      "B. The algorithm reduces the number of items being considered by eliminating all itemsets whose support count is less than the minimum support count.",
  },
  {
    id: 24,
    text: "Internal nodes of a decision tree correspond to:",
    options: [
      "A. Attributes",
      "B. Classes",
      "C. Data instances",
      "D. None of the above",
    ],
    answer: "A. Attributes",
  },
  {
    id: 25,
    text: "Leaf nodes of a decision tree correspond to:",
    options: [
      "A. Attributes",
      "B. Classes",
      "C. Data instances",
      "D. None of the above",
    ],
    answer: "B. Classes",
  },
  {
    id: 26,
    text: "If a decision tree is expressed as a set of logical rules, then:",
    options: [
      "A. The internal nodes in a branch are connected by AND and the branches by AND",
      "B. The internal nodes in a branch are connected by OR and the branches by OR",
      "C. The internal nodes in a branch are connected by AND and the branches by OR",
    ],
    answer:
      "C. The internal nodes in a branch are connected by AND and the branches by OR",
  },
  {
    id: 27,
    text: "Which of the following criteria is not used to decide which attribute to split next in a decision tree:",
    options: [
      "A. Gini index",
      "B. Information gain",
      "C. Entropy",
      "D. Scatter",
    ],
    answer: "D. Scatter",
  },
  {
    id: 28,
    text: "Which of the following is a valid logical rule for the decision tree below?\nIF Business Appointment = No & Temp above 70 = No THEN Decision = wear slacks\nIF Business Appointment = Yes & Temp above 70 = Yes THEN Decision = wear shorts\nIF Temp above 70 = No THEN Decision = wear shorts\nIF Business Appointment = No & Temp above 70 = No THEN Decision = wear jeans",
    options: [
      "A. IF Business Appointment = No & Temp above 70 = No THEN Decision = wear slacks",
      "B. IF Business Appointment = Yes & Temp above 70 = Yes THEN Decision = wear shorts",
      "C. IF Temp above 70 = No THEN Decision = wear shorts",
      "D. IF Business Appointment = No & Temp above 70 = No THEN Decision = wear jeans",
    ],
    answer:
      "D. IF Business Appointment = No & Temp above 70 = No THEN Decision = wear jeans",
  },
  {
    id: 29,
    text: "A decision tree is pruned in order to:",
    options: [
      "A. improve classification accuracy on training set",
      "B. improve generalization performance",
      "C. reduce dimensionality of the data",
      "D. make the tree balanced",
    ],
    answer: "B. improve generalization performance",
  },
  {
    id: 30,
    text: "Which attribute would information gain choose as the root of the tree?",
    options: ["A. Density", "B. Grain", "C. Hardness"],
    answer: "C. Hardness",
  },
  {
    id: 31,
    text: "What class does the tree infer for the example {Density=Light, Grain=Small, Hardness=Hard}?",
    options: [
      "A. Oak",
      "B. Pine",
      "C. The example cannot be classified",
      "D. Both classes are equally likely",
    ],
    answer: "B. Pine",
  },
  {
    id: 32,
    text: "What class does the tree infer for the example {Density=Light, Grain=Small, Hardness=Soft}?",
    options: [
      "A. Oak",
      "B. Pine",
      "C. The example cannot be classified",
      "D. Both classes are equally likely",
    ],
    answer: "A. Oak",
  },
  {
    id: 33,
    text: "What class does the tree infer for the example {Density=Heavy, Grain=Small, Hardness=Soft}?",
    options: [
      "A. Oak",
      "B. Pine",
      "C. The example cannot be classified",
      "D. Both classes are equally likely",
    ],
    answer: "B. Pine",
  },
  {
    id: 34,
    text: "What class does the tree infer for the example {Density=Heavy, Grain=Small, Hardness=Hard}?",
    options: [
      "A. Oak",
      "B. Pine",
      "C. The example cannot be classified",
      "D. Both classes are equally likely",
    ],
    answer: "A. Oak",
  },
  {
    id: 35,
    text: "Bayes classifier is also known as:",
    options: [
      "A. Maximum aposteriori classifier",
      "B. Maximum apriori classifier",
      "C. Most likely classifier",
      "D. Maximum margin classifier",
    ],
    answer: "A. Maximum aposteriori classifier",
  },
  {
    id: 36,
    text: "Which of the following statements is true about Bayes classifier?",
    options: [
      "A. It always provides zero error when class distributions are known",
      "B. It always provides the lowest possible error when class distributions are known",
      "C. It may not always provide the lowest possible error when class distributions are known",
      "D. It always provides the lowest possible error when class distributions are estimated",
    ],
    answer:
      "C. It may not always provide the lowest possible error when class distributions are known",
  },
  {
    id: 37,
    text: "In a multiclass classification problem, Bayes classifier assigns an instance to the class corresponding to:",
    options: [
      "A. Highest aposteriori probability",
      "B. Highest apriori probability",
      "C. Lowest aposteriori probability",
    ],
    answer: "A. Highest aposteriori probability",
  },
  {
    id: 38,
    text: "How would a Naive Bayes classifier classify the example A1 = c, A2 = c, A3 = a?",
    options: [
      "A. C1",
      "B. C2",
      "C. There will be a tie",
      "D. Not enough information to classify",
    ],
    answer: "B. C2",
  },
  {
    id: 38,
    text: "Consider the following three-class confusion matrix. The matrix shows the classification results of a supervised model that uses previous records to determine the classes (C1, C2, C3).\n\nC1 C2 C3\nC1 42 2 1\nC2 5 40 3\nC3 0 3 4\n\nWhat percent of the instances were correctly classified?",
    options: ["A. 45", "B. 47", "C. 86", "D. 88"],
    answer: "C. 86",
  },
  {
    id: 39,
    text: "Margin of a hyperplane is defined as:",
    options: [
      "A. The angle it makes with the axes",
      "B. The intercept it makes on the axes",
      "C. Perpendicular distance from its closest point",
      "D. Perpendicular distance from origin",
    ],
    answer: "C. Perpendicular distance from its closest point",
  },
  {
    id: 40,
    text: "If the hyperplane WTX + b = 0 separates all the training points (Xi , Yi), where yi = {+1, −1}, then:",
    options: [
      "A. ||W|| = 0",
      "B. b = 0",
      "C. WTXi + b ≥ 0 ∀ i",
      "D. yi(WTXi + b) ≥ 0 ∀ i",
    ],
    answer: "D. yi(WTXi + b) ≥ 0 ∀ i",
  },
  {
    id: 41,
    text: "The primal optimization problem solved to obtain the hard margin optimal separating hyperplane is:",
    options: [
      "A. Minimize 1/2 WTW, such that yi(WTXi + b) ≥ 1 ∀ i",
      "B. Minimize 1/2WṬW Σα( yi(WTXi + b) − 1), such that αi ≥ 0 ∀ i",
    ],
    answer: "A. Minimize 1/2 WTW, such that yi(WTXi + b) ≥ 1 ∀ i",
  },
  {
    id: 42,
    text: "The dual optimization problem solved to obtain the hard margin optimal separating hyperplane is:",
    options: [
      "A. Minimize 1/2 WTW, such that yi(WTXi + b) ≥ 1 ∀ i",
      "B. Minimize 1/2WṬW Σα( yi(WTXi + b) − 1), such that αi ≥ 0 ∀ i",
    ],
    answer: "B. Minimize 1/2WṬW Σα( yi(WTXi + b) − 1), such that αi ≥ 0 ∀ i",
  },
  {
    id: 43,
    text: "The Lagrange multipliers corresponding to the support vectors have a value:",
    options: [
      "A. equal to zero",
      "B. less than zero",
      "C. greater than zero",
      "D. can take on any value",
    ],
    answer: "C. greater than zero",
  },
  {
    id: 44,
    text: "For support vectors Xj in a hard margin SVM, we have:",
    options: [
      "A.|WTXi + b| = 0",
      "B.|WTXi + b| < 1",
      "C.|WTXi + b| = 1",
      "D. None of the above",
    ],
    answer: "C.|WTXi + b| = 1",
  },
  {
    id: 45,
    text: "An entry of the Hessian matrix considered in SVM design is of the form:",
    options: [
      "A. Xi. Xj",
      "B. yi − yj",
      "C. yiyj(Xi − Xj)T (Xi − Xj)",
      "D. yiyj(Xi. Xj)",
    ],
    answer: "D. yiyj(Xi. Xj)",
  },
  {
    id: 46,
    text: "The dual optimization problem in SVM design is solved using:",
    options: [
      "A. Linear programming",
      "B. Quadratic programming",
      "C. Dynamic programming",
      "D. Integer programming",
    ],
    answer: "B. Quadratic programming",
  },
  {
    id: 47,
    text: "The relative performance of a SVM on training set and unknown samples is controlled by:",
    options: [
      "A. Lagrange multipliers",
      "B. Margin",
      "C. Slack",
      "D. Generalization constant C",
    ],
    answer: "D. Generalization constant C",
  },
  {
    id: 48,
    text: "The primal optimization problem that is solved to obtain the optimal separating hyperplane in soft margin SVM is:",
    options: [
      "B. Minimize 1/2 WTW, such that yi(WTXi + b) ≥ 1 − ξi and ξi ≥ 0 ∀ i",
      "A. Minimize 1/2WṬW Σα( yi(WTXi + b) − 1), such that αi ≥ 0 ∀ i",
    ],
    answer:
      "B. Minimize 1/2 WTW, such that yi(WTXi + b) ≥ 1 − ξi and ξi ≥ 0 ∀ i",
  },
  {
    id: 49,
    text: "We are designing a SVM WTX + b = 0 , suppose X's are the support vectors and α's are the corresponding Lagrange multipliers, then which of the following statements are correct:",
    options: [
      "A. W = Σ αjyjXj",
      "B. Σαjyj = 0",
      "C. Either A or B",
      "D. Both A and B",
    ],
    answer: "D. Both A and B",
  },
  {
    id: 50,
    text: "The classification boundary realized by the perceptron is a:",
    options: ["A. Circle", "B. Parabola", "C. Straight line", "D. Ellipse"],
    answer: "C. Straight line",
  },
  {
    id: 51,
    text: "A perceptron has two inputs and with weights w1, w2, and a bias weight w0. The activation function of the perceptron is h(x). The output of the perceptron is given by:",
    options: [
      "A. y = h(w1x1 + w2x2 + w0)",
      "B. y = h(w1 + w2 + w0)",
      "C. y = w1x1 + w2x2 + w0",
      "D. y = h(w1x1 + w2x2 − w0)",
    ],
    answer: "A. y = h(w1x1 + w2x2 + w0)",
  },
  {
    id: 52,
    text: "Which of the following logic functions cannot be implemented by a perceptron having two inputs?",
    options: ["A. AND", "B. OR", "C. NOR", "D. XOR"],
    answer: "D. XOR",
  },
  {
    id: 53,
    text: "We provide training inputs to a perceptron learning rule. The desired output is t and the actual output is o. If the learning rate is η, the weight update performed by the learning rule is given by the equation:",
    options: [
      "A. wi ← wi + η(t − o)",
      "B. wi ← wi + η(t − o)x",
      "C. wi ← η(t − o)x",
      "D. wi ← wi + (t − o)",
    ],
    answer: "B. wi ← wi + η(t − o)x",
  },
  {
    id: 54,
    text: "Suppose we have n training examples, whose desired outputs are ti and the output of a perceptron for these training examples is oi. The error function minimized by the gradient descent perceptron learning algorithm is:",
    options: [
      "A. E = Σi=1...n |ti - oi|",
      "B. E = 1/2Σi=1...n (ti - oi)²",
      "C. E = Σi=1...n (ti - oi)",
      "D. E = Σi=1...n (ti - oi)² / n",
    ],
    answer: "B. E = 1/2Σi=1...n (ti - oi)²",
  },
  {
    id: 55,
    text: "The sigmoid activation function is:",
    options: [
      "A. Discontinuous and not differentiable",
      "B. Discontinuous but differentiable",
      "C. Continuous but not differentiable",
      "D. Continuous and differentiable",
    ],
    answer: "D. Continuous and differentiable",
  },
  {
    id: 56,
    text: "The neural network given below takes two binary valued inputs x1, x2 ∈ {0, 1} and the activation function is the binary threshold function (h(x) = 1 if x > 0; 0 otherwise). Which of the following logical functions does it compute?",
    options: ["A. OR", "B. AND", "C. NAND", "D. NOR"],
    answer: "B. AND",
  },
  {
    id: 57,
    text: "The linear regression model y = a0 + a1x is to be fitted to the data in the table shown below. What is the optimal regression model obtained by minimizing sum squared error?",
    options: ["A.E = 1/2Σi=1,...,n(t − o ) 2"],
    answer: "A.E = 1/2Σi=1,...,n(t − o ) 2",
  },
  {
    id: 58,
    text: "Which of the following statements is true for a multilayered perceptron?",
    options: [
      "A.Output of all the nodes of a layer is input to all the nodes of the next layer",
      "B.Output of all the nodes of a layer is input to all the nodes of the same layer",
      "C.Output of all the nodes of a layer is input to all the nodes of the previous layer",
      "D.Output of all the nodes of a layer is input to all the nodes of the output layer",
    ],
    answer:
      "A.Output of all the nodes of a layer is input to all the nodes of the next layer",
  },
  {
    id: 59,
    text: "Which of the statements is true for the backpropagation learning algorithm?",
    options: [
      "A. It always converges to global minima",
      "B. Convergence is independent of the initial weight values",
      "C. It may converge to local minima",
      "D. Learning time decreases with an increase in the number of hidden layers",
    ],
    answer: "C. It may converge to local minima",
  },
  {
    id: 60,
    text: "Under which of the following situations would you expect overfitting to happen?",
    options: [
      "A. With training iterations error on the training set as well as the test set decreases",
      "B. With training iterations error on the training set decreases but the test set increases",
      "C. With training iterations error on the training set as well as the test set increases",
      "D. With training iterations, the training set as well as the test set error remains constant",
    ],
    answer:
      "B. With training iterations error on the training set decreases but the test set increases",
  },
  {
    id: 61,
    text: "Regression is used in:",
    options: [
      "A. Predicting independent variables using dependent variables",
      "B. Predicting dependent variables using independent variables",
      "C. Predicting the independence of independent variables",
      "D. Predicting dependent coefficients",
    ],
    answer: "B. Predicting dependent variables using independent variables",
  },
  {
    id: 62,
    text: "If x1, x2 are independent variables and y the dependent variable, which of the following represents a linear regression model?",
    options: [
      "A. y = a0 + a1/x1 + a2/x2",
      "B. y = a0 + a1x1 + a2x2",
      "C. y = a0 + a1x1 + a2x2^2",
      "D. y = a0 + a1x1^2 + a2x2^2",
    ],
    answer: "B. y = a0 + a1x1 + a2x2",
  },
  {
    id: 63,
    text: "Which of the following optimizations is typically performed in obtaining the coefficients of linear regression?",
    options: [
      "A. Maximizing the number of points lying on the regression line",
      "B. Minimizing the number of points lying on the regression line",
      "C. Minimizing the sum of squared distance of the regression line from the points",
      "D. Minimizing the distance of the farthest point",
    ],
    answer:
      "C. Minimizing the sum of squared distance of the regression line from the points",
  },
  {
    id: 64,
    text: "The linear regression model y = a0 + a1x is applied to the data in the table shown below. What is the value of the sum squared error function S(a0, a1), when a0 = 1, a1 = 1?\n\nx\t\ty\n0\t\t1\n1\t\t1.9\n2\t\t2.5\n2.5\t\t3",
    options: ["A. 0.00", "B. 0.25", "C. 0.50", "D. 0.51"],
    answer: "D. 0.51",
  },
  {
    id: 65,
    text: "The linear regression model y = a0 + a1x is to be fitted to the data in the table shown below. What is the optimal regression model obtained by minimizing sum squared error?",
    options: [
      "A. y = 1.01 – 2.10x",
      "B. y = 1.01 + 2.10x",
      "C. y = 1.01 – 0.98x",
      "D. y = 1.01 + 0.98x",
    ],
    answer: "D. y = 1.01 + 0.98x",
  },
  {
    id: 66,
    text: "The linear regression model y = a0 + a1x1 + a2x2 is applied to the data in the table shown below. What is the value of the sum squared error function S(a0, a1, a2), when a0 = 1, a1 = 1, a2 = 1?\n\nx1\t\tx2\t\ty\n0\t\t0\t\t1\n0\t\t1\t\t1.5\n1\t\t0\t\t2.5\n1\t\t1\t\t3",
    options: ["A. 0.00", "B. 0.25", "C. 0.50", "D. 1.00"],
    answer: "C. 0.50",
  },
  {
    id: 67,
    text: "The linear regression model y = a0 + a1x1 + a2x2 is to be fitted to the data in the table shown below. What is the optimal regression model obtained by minimizing sum squared error?\n\nx1\t\tx2\t\ty\n0\t\t0\t\t1\n0\t\t1\t\t1.5\n1\t\t0\t\t2.5\n1\t\t2\t\t3.5",
    options: [
      "A. y = 1.10 + 1.35x1 + 0.30x2",
      "B. y = 1.10 - 1.35x1 + 0.30x2",
      "C. y = 1.10 + 2.15x1 + 0.30x2",
      "D. y = 1.10 - 2.50x1 + 0.50x2",
    ],
    answer: "A. y = 1.10 + 1.35x1 + 0.30x2",
  },
  {
    id: 68,
    text: "The linear regression model y = a0 + a1x1 + a2x2 + ... + apxp is to be fitted to a set of N training data points having p attributes each. Let X be N x (p+1) vectors of input values (augmented by 1’s), Y be N x1 vector of target values, and θ be (p+1) x 1 vector of parameter values (a0, a1, a2, ..., ap). If the sum squared error is minimized for obtaining the optimal regression model, which of the following equations holds?",
    options: ["A. XTX = Xy", "B. Xθ = XTy", "C. XTXθ = y", "D. XTXθ = XTy"],
    answer: "D. XTXθ = XTy",
  },
  {
    id: 69,
    text: "In the figures below the training instances for classification problems are described by dots. The blue dotted lines indicate the actual functions and the red lines indicate the regression model. Which of the following statements are correct?",
    options: [
      "A. Figure 1 represents overfitting and Figure 2 represents underfitting",
      "B. Figure 1 represents underrfitting and Figure 2 represents overfitting",
      "C. Both Figure 1 and Figure 2 represents underfitting",
      "D. Both Figure 1 and Figure 2 represents overfitting",
    ],
    answer:
      "B. Figure 1 represents underrfitting and Figure 2 represents overfitting",
  },
  {
    id: 70,
    text: "Which of the following statements is usually true?",
    options: [
      "A. Error of simple regression models has high bias but low variance",
      "B. Error of simple regression models has low bias but high variance",
      "C. Error of simple regression models has low bias and low variance",
      "D. Error of simple regression models has high bias and high variance",
    ],
    answer:
      "A. Error of simple regression models has high bias but low variance",
  },
  {
    id: 71,
    text: "Suppose we want to use linear autoregression for predicting xt+1 given x1,..., xt of a time series. The model that can be used is of the form:",
    options: [
      "A. xt+1 = xt",
      "B. xt+1 = at xt",
      "C. xt+1 = Σt k=1 xk",
      "D. xt+1 = Σt k=1ak xk",
    ],
    answer: "D. xt+1 = Σt k=1ak xk",
  },
  {
    id: 72,
    text: "Which of the following can be considered as a data mining task?",
    options: [
      "A. registering for an online course",
      "B. online money payment through a bank",
      "C. predicting if a student will pass an online course",
      "D. downloading the certificate from course website",
    ],
    answer: "C. predicting if a student will pass an online course",
  },
  {
    id: 73,
    text: "The final step in the data mining process is usually?",
    options: [
      "A. data cleaning",
      "B. preprocessing",
      "C. modeling",
      "D. pattern evaluation and visualization",
    ],
    answer: "D. pattern evaluation and visualization",
  },
  {
    id: 74,
    text: "If a row of a data matrix represents an object, a column usually represents?",
    options: ["A. attribute", "B. record", "C. table name", "D. entity"],
    answer: "A. attribute",
  },
  {
    id: 75,
    text: "College name of a student considered as an attribute of type?",
    options: ["A. nominal", "B. ordinal", "C. interval", "D. ratio"],
    answer: "A. nominal",
  },
  {
    id: 76,
    text: "Distance between two cities in kilometers can be considered as an attribute of type?",
    options: ["A. nominal", "B. ordinal", "C. interval", "D. ratio"],
    answer: "D. ratio",
  },
  {
    id: 77,
    text: "Which of the following operations cannot be performed on interval attributes?",
    options: [
      "A. distinctness",
      "B. order",
      "C. addition",
      "D. multiplication",
    ],
    answer: "D. multiplication",
  },
  {
    id: 78,
    text: "Which of the following operations can be performed on nominal attributes?",
    options: [
      "A. distinctness",
      "B. order",
      "C. both of the above",
      "D. none of the above",
    ],
    answer: "A. distinctness",
  },
  {
    id: 79,
    text: "Which of the following is an example of discrete attribute?",
    options: [
      "A. thickness of a book in centimeter",
      "B. weight of a book in gram",
      "C. number of words in a book",
      "D. none of the above",
    ],
    answer: "C. number of words in a book",
  },
  {
    id: 80,
    text: "Exam and assignment marks obtained by all the students registered in a course can be considered an example of",
    options: [
      "A. record data",
      "B. ordered data",
      "C. graph data",
      "D. none of the above",
    ],
    answer: "A. record data",
  },
  {
    id: 81,
    text: "Which of the following is not a data quality?",
    options: [
      "A. number of objects",
      "B. number of attributes",
      "C. missing values",
      "D. outliers",
    ],
    answer: "B. number of attributes",
  },
  {
    id: 82,
    text: "Which of the following is not a goal for data sampling algorithms?",
    options: [
      "A. reduction in data volume",
      "B. preservation of data properties",
      "C. obtaining a representative subset of data points",
      "D. finding out missing attribute values",
    ],
    answer: "D. finding out missing attribute values",
  },
  {
    id: 83,
    text: "Discretization of attributes refers to:",
    options: [
      "A. deleting data objects",
      "B. deleting data attributes",
      "C. modifying nature of attribute values",
      "D. removing noisy data objects",
    ],
    answer: "C. modifying nature of attribute values",
  },
  {
    id: 84,
    text: "Classification is",
    options: [
      "A. A subdivision of a set of examples into a number of classes.",
      "B. A measure of the accuracy, of the classification of a concept that is given by a certain theory.",
      "C. The task of assigning a classification to a set of examples",
      "D. None of these",
    ],
    answer: "A. A subdivision of a set of examples into a number of classes.",
  },
  {
    id: 85,
    text: "Assume that the largest frequent itemset is of size k. How many passes does it make in the worst case?",
    options: ["A. k-1", "B. k", "C. k+1", "D. k^2"],
    answer: "C. k+1",
  },
  {
    id: 86,
    text: "How can we avoid overfitting in the Decision Tree?",
    options: [
      "A. CHAID (Stopping the Tree Growth)",
      "B. Pruning the Full Grown Tree",
      "C. Both of the above",
      "D. None of the Above",
    ],
    answer: "C. Both of the above",
  },
  {
    id: 87,
    text: "Which of the following statements are true?",
    options: [
      "A. Training a k-nearest neighbors classifier takes more computational time than applying it.",
      "B. The more training examples, the more accurate the prediction of a k-nearest neighbors.",
      "C. k-nearest neighbors cannot be used for regression.",
      "D. A k-nearest-neighbors is sensitive to outliers.",
    ],
    answer:
      "B. The more training examples, the more accurate the prediction of a k-nearest neighbors.",
  },
  {
    id: 88,
    text: "Check all the binary classifiers that are able to correctly separate the training data (circles vs. triangles) given in the Figure given below:",
    options: [
      "A. Logistic regression",
      "B. SVM with linear kernel",
      "C. Decision tree",
      "D. 3-nearest neighbor classifier (with Euclidean distance)",
    ],
    answer: "C. Decision tree",
  },
  {
    id: 89,
    text: "Consider pass of the Apriori algorithm in which the frequent itemsets are being foundLet n be the number of frequent itemsWe know that a transaction T can be eliminated during pass if it is found that T does not contain at least some candidate -itemsets. (T then could never support any candidate)-itemsets for j> Sowe will throw away T if it does not contain at least x candidate i-itemsetsWhat is the largest value for x that we can safely use?.",
    options: ["A.1", "B.2n", "C. i", "D.i+ 1"],
    answer: "D.i+ 1",
  },
  {
    id: 90,
    text: "The 2-itemsets that satisfy the support criteria are:",
    options: [
      "A. (BC), (BE), (CE), (AE)",
      "B. (AB), (BD), (AD)",
      "C. (AE), (BC)",
      "D. (BC)",
    ],
    answer: "B. (AB), (BD), (AD)",
  },
  {
    id: 91,
    text: "Apriori pruning in the search for frequent itemsets works because",
    options: [
      "A. support count is monotonic with respect to itemsets.",
      "B. support count is anti-monotonic with respect to itemsets.",
      "C. support count diverges as we add to the itemsets.",
      "D. we search in transaction ID order.",
      "E. it is an excellent heuristic, but it does not work 100% of the time.",
    ],
    answer: "B. support count is anti-monotonic with respect to itemsets.",
  },
  {
    id: 92,
    text: "Naive Bayesian classification",
    options: [
      "A. is guaranteed never to misclassify any of its training data.",
      "B. needs no prior probabilities.",
      "C. is theoretically optimal with respect to minimizing classification error, modulo the conditional independence assumption.",
    ],
    answer:
      "C. is theoretically optimal with respect to minimizing classification error, modulo the conditional independence assumption.",
  },
  {
    id: 93,
    text: "Previous probabilities in Bayes Theorem that are changed with help of new available information are classified as",
    options: [
      "A. Independent probabilities",
      "B. Posterior probabilities",
      "C. Interior probabilities",
      "D. Dependent probabilities",
    ],
    answer: "B. Posterior probabilities",
  },
  {
    id: 94,
    text: "Bias is",
    options: [
      "A. A class of learning algorithm that tries to find an optimum classification of a set of examples using the probabilistic theory",
      "B. Any mechanism employed by a learning system to constrain the search space of a hypothesis",
      "C. An approach to the design of learning algorithms that is inspired by the fact that when people encounter new situations, they often explain them by reference to familiar experiences, adapting the explanations to fit the new situation.",
      "D. None of these",
    ],
    answer:
      "B. Any mechanism employed by a learning system to constrain the search space of a hypothesis",
  },
  {
    id: 95,
    text: "Consider the problem of binary classification using the Naive Bayes classifier. You are given 2D features (X1, X2) and the categorical class conditional distributions in the tables below. The entries in the tables correspond to P(X1=x1|Ci) and P(X2=x2|Ci) respectively. The two classes are equally likely. Given a data point (-1,1), the posterior probabilities P(C1|X1=-1,X2=1)",
    options: ["A. 0.5", "B. 0.9", "C. 0.1", "D. 0.7"],
    answer: "C. 0.1",
  },
  {
    id: 96,
    text: "A nearest neighbor approach is best used",
    options: [
      "A. With large-sized datasets.",
      "B. When irrelevant attributes have been removed from the data.",
      "C. When a generalized model of the data is desirable.",
      "D. When an explanation of what has been found is of primary importance.",
    ],
    answer: "B. When irrelevant attributes have been removed from the data.",
  },
  {
    id: 97,
    text: "Select the correct statements related to KNN classifier (1) In KNN classifier, NEAREST NEIGHBOR determines the decision boundary locally (2) Also called: (i) Case-based learning, (ii) Memory-based learning and (iii)Lazy learning (3) INN is not very robust",
    options: [
      "A. only (1) and (2)",
      "B. only (1)",
      "C. only (2)",
      "D. all of them",
    ],
    answer: "C. only (2)",
  },
  {
    id: 98,
    text: "Select the correct statements related to KNN classifier and NB Classifier",
    options: [
      "A. It is not possible to convert the multiclass classification problem into a set of binary classification problems",
      "B. The case when the labels are just +1 or -1 is called two-class classification problems",
      "C. When 'I' is related to more than two classes, then it is called multiclass classification problem",
      "D. It is possible to convert the multiclass classification problem into a set of binary classification problems",
    ],
    answer:
      "B. The case when the labels are just +1 or -1 is called two-class classification problems\nD. It is possible to convert the multiclass classification problem into a set of binary classification problems",
  },
  {
    id: 99,
    text: "Which of these classifiers could have generated this decision boundary?",
    options: [
      "A. Linear SVM",
      "B. Logistic regression",
      "C. 1-NN",
      "D. None of the above",
    ],
    answer: "C. 1-NN",
  },
  {
    id: 100,
    text: "Consider the following dataset with one real-valued input and one binary output (+ or -). The following questions assume that we are using k nearest-neighbor learning with unweighted Euclidean distance to predict y for an input x. What is the leave-one-out cross-validation error of 1-NN on this dataset. Give your answer as the number of misclassifications and circle them in the diagram above.",
    options: ["A. 6", "B. 4", "C. 8", "D. 2"],
    answer: "B. 4",
  },
  {
    id: 101,
    text: "What is the leave-one-out cross-validation error of 3-NN on this dataset? Give your answer as the number of misclassifications and circle them in the diagram below.",
    image: "image_url_here",
    options: ["A. 6", "B. 4", "C. 8", "D. 2"],
    answer: "C. 8",
  },
  {
    id: 102,
    text: "Suppose a 7-nearest neighbor regression search returns {7, 6, 8, 4, 7, 1, 100} as the 7 nearest y values for a given x value. What is the value of y* that minimizes the L1 loss function on this data?",
    options: ["A. 19", "B. 8", "C. 7", "D. 6"],
    answer: "C. 7",
  },
  {
    id: 103,
    text: "The support vector machine uses the loss function:",
    options: [
      "A. I(y,f) = max(0, 1 - yf)",
      "B. I(y, f) = log(1 + exp(- yf))",
      "C. I(y, f) = (y - f)2",
      "D. I(y, f) = |y - f|",
    ],
    answer: "A. I(y,f) = max(0, 1 - yf)",
  },
  {
    id: 104,
    text: "A linear SVM classifier used in combination with the sliding window object detector:",
    options: [
      "A. is fast because of the cascade structure",
      "B. is fast because it can be expressed in the form of a dot-product : f[x] = a ^ 2 * x + b",
      "C. is slower compared to the nonlinear SVM.",
      "D. usually has lower accuracy compared to the nonlinear SVM.",
    ],
    answer:
      "B. is fast because it can be expressed in the form of a dot-product : f[x] = a ^ 2 * x + b",
  },
  {
    id: 105,
    text: "The training examples closest to the separating hyperplane are called as",
    options: [
      "A. Training vectors",
      "B. Test vectors",
      "C. Support vectors",
      "D. Line vectors",
    ],
    answer: "C. Support vectors",
  },
  {
    id: 106,
    text: "The soft margin SVM formulation is as follows",
    options: [
      "A. C-SVM classification",
      "B. Nu-SVM Classification",
      "C. Epsilon-SVM regression",
      "D. All the above",
    ],
    answer: "D. All the above",
  },
  {
    id: 107,
    text: "Consider the binary classification problem where y belongs to (0, 1) is the label and we have prior probability P(y=0)=π0. If we model |P(x| y=1)| to be the following distributions, which ones will cause the posterior P(y=1|x) to have a logistic function form?",
    options: [
      "A. Gaussian",
      "B. Poisson",
      "C. Uniform",
      "D. None of the above",
    ],
    answer: "A. Gaussian",
  },
  {
    id: 108,
    text: "Consider the following three-class confusion matrix. The matrix shows the classification results of a supervised model that uses previous records to determine the classes (C1, C2, C3). What percent of the instances were correctly classified?",
    options: ["A. 45", "B. 47", "C. 86", "D. 88"],
    answer: "C. 86",
  },
  {
    id: 109,
    text: "Given the following data samples (square and angle mean two classes), which one of the following kernels can we use in SVM to separate the two classes?",
    options: [
      "A. Linear kernel",
      "B. Polynomial kernel",
      "C. Gaussian kernel",
      "D. None of the above",
    ],
    answer: "C. Gaussian kernel",
  },
  {
    id: 111,
    text: "What do you mean by generalization error in terms of the SVM?",
    options: [
      "A. How far the hyperplane is from the support vectors",
      "B. How accurately the SVM can predict the outcomes for unseen data",
      "C. The threshold amount of error in an SVM",
      "D. None of the above",
    ],
    answer:
      "B. How accurately the SVM can predict the outcomes for unseen data",
  },
  {
    id: 112,
    text: "The effectiveness of an SVM depends upon",
    options: [
      "A. Selection of Kernel",
      "B. Kernel parameters",
      "C. Soft Margin Parameter C",
      "D. All of the above",
    ],
    answer: "D. All of the above",
  },
  {
    id: 113,
    text: "For what purpose are Feedback neural networks primarily used?",
    options: [
      "A. Classification",
      "B. Feature mapping",
      "C. Pattern mapping",
      "D. Pattern storage",
    ],
    answer: "D. Pattern storage",
  },
  {
    id: 114,
    text: "The network of the following figure is:",
    options: [
      "A. A single layer feed-forward neural network",
      "B. An autoassociative neural network",
      "C. A multiple layer neural network",
      "D. None of the above",
    ],
    answer: "A. A single layer feed-forward neural network",
  },
  {
    id: 115,
    text: "A perceptron has two inputs x₁ and x₂ with weights w₁ and w₂, and a bias weight of w₀. The activation function of the perceptron is h(x). The output of the perceptron is given by:",
    options: [
      "A. y = h(wx + w₂w₂ + w₀)",
      "B. y = h(e₂ + w₂ + w₀)",
      "C. y = w₁x₁ + w₂x₂ + w₀",
      "D. y = h(wx + w₂w₂ - w₀)",
    ],
    answer: "A. y = h(wx + w₂w₂ + w₀)",
  },
  {
    id: 116,
    text: "Which of the following logic functions cannot be implemented by aperceptron having two inputs?",
    options: ["A. AND", "B. OR", "C. NOR", "D. XOR"],
    answer: "D. XOR",
  },
  {
    id: 117,
    text: "Suppose we have n training examples x, i=1...n, whose desired outputs are t, i=1...n. The output of a perceptron for these training examples xi's are 0, i=1...n. The error function minimized by the gradient descent perceptron learning algorithm is:",
    options: [
      "A. E = Σi=1...n (ti - oi)",
      "B. E = 1/2Σi=1...n (ti - oi)^2",
      "C. E = Σi=1...n (oi - ti)^2",
      "D. E = 1/2Σi=1...n (oi - ti)",
    ],
    answer: "B. E = 1/2Σi=1...n (ti - oi)^2",
  },
  {
    id: 118,
    text: "A 3-input neuron is trained to output a zero when the input is 110 and a one when the input is 111. After generalization, the output will be zero when and only when the input is:",
    options: [
      "A. 000 or 110 or 011 or 101",
      "B. 010 or 100 or 110 or 101",
      "C. 000 or 010 or 110 or 100",
      "D. 100 or 111 or 101 or 001",
    ],
    answer: "C. 000 or 010 or 110 or 100",
  },
  {
    id: 119,
    text: "What are the advantages of neural networks over conventional computers? (1) They have the ability to learn by example (ii) They are more fault tolerant (i)They are more suited for real time operation due to their high computational rates ",
    options: [
      "A. (i) and (ii) are true",
      "B. (i) and (iii) are true",
      "C. Only (i)",
      "D. All of the mentioned",
    ],
    answer: "D. All of the mentioned",
  },
  {
    id: 120,
    text: "Why is the XOR problem exceptionally interesting to neural network researchers?",
    options: [
      "A. Because it can be expressed in a way that allows you to use a neural network",
      "B. Because it is a complex binary operation that cannot be solved using neural networks",
      "C. Because it can be solved by a single-layer perceptron",
      "D. Because it is the simplest linearly inseparable problem that exists",
    ],
    answer:
      "D. Because it is the simplest linearly inseparable problem that exists",
  },
  {
    id: 121,
    text: "Why are linearly separable problems of interest to neural network researchers?",
    options: [
      "A. Because they are the only class of problems that a network can solve successfully",
      "B. Because they are the only class of problems that a perceptron can solve successfully",
      "C. Because they are the only mathematical functions that are continuous",
      "D. Because they are the only mathematical functions you can draw",
    ],
    answer:
      "B. Because they are the only class of problems that a perceptron can solve successfully",
  },
  {
    id: 122,
    text: "The network shown in the following figure is trained to recognise the characters H and T as shown below:",
    options: [
      "A. remove the entire outlier",
      "B. remove the relevant component.",
      "C. correct the relevant component",
      "D. None of these",
    ],
    answer: "C. correct the relevant component",
  },
  {
    id: 123,
    text: "Which points are eliminated by the DBSCAN algorithm?",
    options: [
      "A. Core points",
      "B. Border points",
      "C. Noise points",
      "D. None of them",
    ],
    answer: "C. Noise points",
  },
  {
    id: 124,
    text: "How many clusters are generated by the k-means algorithm?",
    options: ["A. 3", "B. k", "C. x", "D. Number of points divided by k"],
    answer: "B. k",
  },
  {
    id: 125,
    text: "Which algorithm is most suitable for these data points?",
    options: [
      "A. DBSCAN",
      "B. K-means",
      "C. Both give a similar result",
      "D. None can be applied",
    ],
    answer: "A. DBSCAN",
  },
  {
    id: 127,
    text: "How is the density of point p at the density-based clustering defined?",
    options: [
      "A. MinPts minus the number of data points in an epsilon-neighborhood",
      "B. Number of data points in an epsilon-neighborhood of p",
      "C. Reciprocal value of the distance from p to the nearest neighbor",
      "D. Undefined",
    ],
    answer: "B. Number of data points in an epsilon-neighborhood of p",
  },
  {
    id: 128,
    text: "The Euclidean distance matrix between four 2-D points P1, p2, p3, and p4 is shown below. A possible set of coordinate values of these points are:",
    options: [
      "A. p1 = (0, 0), p2 = (0, 1), p3 = (1, 0), p4 = (1, 1)",
      "B. p1 = (0, 0), p2 = (1, 0), p3 = (1, 1), p4 = (0, 1)",
      "C. p1 = (1, 0), p2 = (0, 0), p3 = (1, 1), p4 = (0, 1)",
      "D. p1 = (0, 0), p2 = (1, 1), p3 = (1, 0), p4 = (0, 1)",
    ],
    answer: "B. p1 = (0, 0), p2 = (1, 0), p3 = (1, 1), p4 = (0, 1)",
  },
  {
    id: 129,
    text: "Given a set of seven 2-dimensional points p1=(0, 0), p2=(5, 0), p3=(5, 1), p4=(0, 1), p5=(0, 0.5), p6=(0, 9), and p7=(-5.5, 1). Euclidean distance is the distance function. The DBSCAN algorithm is used to cluster the points. Epsilon = 1, and MinPts = 2 is used for DBSCAN. The clusters and outliers obtained are:",
    options: [
      "A. Clusters: {p1, p3, p4, p5} {p2, p7}; Outlier: p6",
      "B. Clusters: {p1, p2, p3} {p4, p5, p6}; Outlier: p7",
      "C. Clusters: {p1, p4, p5} {p2, p3, p7}; Outlier: p6",
      "D. Clusters: {p1, p4, p5} {p2, p3, p6}; Outlier: p7",
    ],
    answer: "C. Clusters: {p1, p4, p5} {p2, p3, p7}; Outlier: p6",
  },
  {
    id: 130,
    text: "A simple random sample is one in which:",
    options: [
      "A. From a random starting point, every nth unit from the sampling frame is selected",
      "B. A non-probability strategy is used, making the results difficult to generalize",
      "C. The researcher has a certain quota of respondents to fill for various social groups",
      "D. Every unit of the population has an equal chance of being selected",
    ],
    answer:
      "D. Every unit of the population has an equal chance of being selected",
  },
  {
    id: 131,
    text: "There are two binary attributes A and B. We know that the attributes are independent and probability P(A=1) = 0.7, and P(B=0) = 0.3. What is the probability that both A and B have values 1?",
    options: ["A. 0.11", "B. 0.33", "C. 0.40", "D. 0.49"],
    answer: "D. 0.49",
  },
  {
    id: 132,
    text: "We want to classify an instance x into one of two classes C1 and C2. Class labels of ten other training set instances sorted in increasing order of their distance to x is as follows: {C1, C2, C1, C2, C2, C2, C1, C2, C1, C2}. How will a K=5 nearest neighbor classifier classify x?",
    options: [
      "A. There will be a tie",
      "B. C1",
      "C. C2",
      "D. Not enough information to classify",
    ],
    answer: "C. C2",
  },
  {
    id: 133,
    text: "Consider the following data for questions 7-10. You are given the following set of training examples. Each attribute can take on one of three nominal values: a, b, or c.\nA1 A2 A3 Class\na c a C1\nc a c C1\na a c C2\nb c a C2\nc c b C2\n\nHow would a Naive Bayes classifier classify the example A1 = a, A2 = c, A3 = b?",
    options: [
      "A. C1",
      "B. C2",
      "C. There will be a tie",
      "D. Not enough information to classify",
    ],
    answer: "B. C2",
  },
  {
    id: 134,
    text: "What is the value of y* that minimizes the L2 loss function on this data?",
    options: ["A. 19", "B. 8", "C. 7", "D. 6"],
    answer: "A. 19",
  },
  {
    id: 135,
    text: "We want to classify a student into two classes “hirable (H)” and “non-hirable (N)” based on her percentage marks m in an exam. We found that probability P (H) = 0.8, and P (N) = 0.2. We also found that probability P (m=70|H) = 0.90, and P (m=70|N) = 0.30. The class to which Bayes classifier will classify a student who has obtained 70% marks is?",
    options: [
      "A. Hirable",
      "B. Non-hirable",
      "C. Both classes with equal probability",
      "D. Not enough information to decide",
    ],
    answer: "A. Hirable",
  },
  {
    id: 136,
    text: "What effect does increasing the sample size have upon the sampling error?",
    options: [
      "A. It reduces the sampling error",
      "It increases the sampling error",
      "C. It has no effect on the sampling error",
      "D. None of the above. ",
    ],
    answer: "A. It reduces the sampling error",
  },
  {
    id: 137,
    text: "The term 'data processing error' refers to:",
    options: [
      "A. activities or events related to the sampling process, e.g. non-response",
      "B. faulty techniques of coding and managing data",
      "C. problems with the implementation of the research process",
      "D. the unavoidable discrepancy between the sample and the population",
    ],
    answer: "B. faulty techniques of coding and managing data",
  },
];

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

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
        totalScore += 1;
      }
    }
    setScore(totalScore);
    setShowPopup(true);
    setSubmitted(true);
    setShowCorrectAnswers(true);
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
      <h1 className="app-title">Data Mining MCQ</h1>
      <form className="quiz-form">
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p className="question-text">{question.text}</p>
            <div className="options">
              {question.options.map((option) => (
                <label
                  key={option}
                  className={`option ${
                    submitted &&
                    selectedOptions[question.id] === option &&
                    question.answer !== option
                      ? "wrong-answer"
                      : question.answer === option && showCorrectAnswers
                      ? "correct-answer"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        {/* <button
          className="show-answers-btn"
          onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}
          style={{display: 'hide'}}
        >
          Show Correct Answers
        </button> */}
      </form>
      {showPopup && (
        <div className="popup">
          <p className="popup-content">
            Your score: {score} out of {questions.length * 1}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
