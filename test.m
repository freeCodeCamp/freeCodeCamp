function X = fft1d(x)
    N = length(x);

    if N <= 1
        X = x;
    else
        x_even = fft1d(x(1:2:N-1));
        x_odd = fft1d(x(2:2:N));

        factor = exp(-2i * pi * (0:N/2-1) / N);
        X = [x_even + factor .* x_odd, x_even - factor .* x_odd];
    end
end
