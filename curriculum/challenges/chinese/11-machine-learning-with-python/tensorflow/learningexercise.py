import tensorflow as tf
import numpy as np

# Exercise 1: Create and Train a Simple Neural Network
# Define the model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(10, input_shape=(1,), activation='relu'),
    tf.keras.layers.Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mse')

# Generate some synthetic data
X = np.random.rand(100, 1)
y = 2 * X + 1 + np.random.randn(100, 1) * 0.1

# Train the model
model.fit(X, y, epochs=50, verbose=0)

# Exercise 2: Make Predictions
# Generate new data for prediction
X_new = np.array([[0.5]])

# Predict
prediction = model.predict(X_new)
print("Prediction for X_new:", prediction)

# Exercise 3: Save and Load Model
# Save the model
model.save('simple_model')

# Load the model
loaded_model = tf.keras.models.load_model('simple_model')

# Exercise 4: Evaluate Model
# Evaluate the loaded model
loss = loaded_model.evaluate(X, y)
print("Loss of loaded model:", loss)
