---
title: Eigen Faces
---
## Eigen Faces
### Outline
* Problem
* Solution Approach
* Dataset
* Mathematical Analysis
* Image Reconstruction
### Problem
We typically use the eigenvalues and eigenvectors of the covariance matrix of the data to compute our principal components. What if you are not able to calculate covariance matrix due to memory issues?
### Solution Approach
We now use a trick. Instead of using image dimensions for the covariance matrix, we use number of images. This opens up another advantage. Now that we have the feature vectors of all our images, all we need is these m images to be able to reconstruct any image in the world.
### Defining the dataset
Consider we have m greyscale images of size n x n. m is of the order of 100 and n is of the order 10000. Our goal is to select k components which correctly represent all the features of the image.
We now create a matrix X, where we store the flattened images (n^2 x 1) row wise. Therefore X is of dimension n^2 x m.
### Mathematical Analysis
Computing the covariance of this matrix is where things get interesting. 
Covariance of a matrix X is defined as dot(X, X.T) , the dimension of which is n^2 x n^2.This will obviously go out of memory for such a large dataset.
Nowconsider the following set of equations.
dot(X.T, X) V = λ V where V is the Eigenvector and λ is the corresponding Eigenvalues.
Pre-multiplying with X,
dot(dot(X , X.T) , dot(X,V)) = λ dot(X . V)
Thus we find that Eigenvector of the covariance matrix is simply the dot product of the image matrix and the Eigenvector of dot(X.T , X).

We therefore compute dot(X.T , X) , whose dimension is just m x m, and use the Eigenvector of this matrix to construct the Eigenvector of
the original matrix.
The m eigenvalues of dot(X.T, X) (along with their corresponding eigenvectors) correspond to the m largest eigenvalues of dot(X, X.T) (along with their corresponding eigenvectors). Our required
eigenvectors are just the first k eigenvectors and their corresponding eigenvalues. We now compute a matrix of eigenfaces, which is nothing but the images weighted against their
eigenvectors. Weights for every k image will now be dot(X.T , eigenfaces(first k values)).
### Image Reconstruction
This method helps us represent any image using just k features of m images. Any image can be reconstructed using these weights.
To get any image i,
Image(i) = dot(eigenface(k) , weight[i,:].T)
