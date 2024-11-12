def calculate_acceleration(v0_kmh, v, d):
    """
    Calculate the constant acceleration required to stop an object given the initial velocity, 
    final velocity, and the stopping distance.

    Parameters:
    v0_kmh (float): Initial velocity in km/h.
    v (float): Final velocity in m/s (typically 0 when stopping).
    d (float): Distance over which the object stops (in meters).

    Returns:
    float: The constant acceleration in m/s².
    """
    # Convert initial velocity from km/h to m/s
    v0 = (v0_kmh * 1000) / 3600  # Convert km/h to m/s
    
    # Calculate acceleration using the equation: a = (v^2 - v0^2) / (2 * d)
    a = (v**2 - v0**2) / (2 * d)
    
    return a

# Example usage:
v0_kmh = 310  # Initial velocity in km/h
v = 0  # Final velocity in m/s (since the object stops)
d = 1000  # Distance in meters

# Call the function to calculate acceleration
acceleration = calculate_acceleration(v0_kmh, v, d)

# Output the result
print(f"The constant acceleration required to stop the jet is {acceleration:.2f} m/s².")
